import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, MessageCircle } from 'lucide-react';
import { getEtiquetteAdvice } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const EtiquetteAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am Lumina AI. How may I assist you with your etiquette or presence today?' }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoadingState(LoadingState.LOADING);

    try {
      const response = await getEtiquetteAdvice(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I am unable to provide advice at this moment." }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-stone-900 text-white p-4 rounded-full shadow-2xl hover:bg-stone-800 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-8 right-4 md:right-8 w-[90vw] md:w-[400px] bg-white shadow-2xl z-50 rounded-lg overflow-hidden border border-stone-200 flex flex-col max-h-[600px] h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-yellow-400" />
                <h3 className="font-serif tracking-wide">Ask Lumina</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm font-sans leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-br-none' 
                      : 'bg-white border border-stone-200 text-stone-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about etiquette..."
                className="flex-1 border-b border-stone-300 focus:border-stone-800 outline-none px-2 py-2 text-sm bg-transparent font-sans"
              />
              <button 
                onClick={handleSend}
                disabled={loadingState === LoadingState.LOADING || !input.trim()}
                className="bg-stone-900 text-white p-2 rounded-sm hover:bg-stone-700 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EtiquetteAI;
