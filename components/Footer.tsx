import React from 'react';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Brand */}
            <div className="max-w-xs">
                <h2 className="font-logo text-2xl tracking-[0.2em] text-white mb-6">LUMINA</h2>
                <p className="font-sans text-sm leading-relaxed text-stone-400">
                    Guiding you from first impressions to lasting impact. Elevate your presence with world-class coaching.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
                <ul className="space-y-3 font-sans text-sm">
                    <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#offerings" className="hover:text-white transition-colors">Offerings</a></li>
                    <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
                <div className="space-y-3 font-sans text-sm">
                    <p>Phone: +1 987 654 3210</p>
                    <p>Email: concierge@lumina-evolve.com</p>
                    <div className="flex gap-4 mt-6">
                        <a 
                          href="https://www.instagram.com/lumina_empowering_you/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"
                        >
                          <Instagram size={18} />
                        </a>
                        <a 
                          href="https://www.linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a 
                          href="https://www.youtube.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"
                        >
                          <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs font-sans text-stone-500">
            <p>&copy; 2024 LUMINA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-stone-300">Privacy Policy</a>
                <a href="#" className="hover:text-stone-300">Terms & Conditions</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;