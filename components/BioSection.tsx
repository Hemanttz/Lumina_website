import React from 'react';

const BioSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center relative">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative z-10">
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto md:ml-auto md:mr-0 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Elena Vance - Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Side - Overlapping Card */}
          <div className="w-full md:w-1/2 z-20 mt-[-50px] md:mt-0 md:-ml-20">
            <div className="bg-white p-8 md:p-12 lg:p-16 shadow-xl max-w-lg mx-auto md:mx-0">
              <h2 className="font-serif italic text-3xl md:text-4xl text-stone-800 mb-6">
                Evolve With Elena Vance
              </h2>
              <div className="w-16 h-0.5 bg-stone-300 mb-6"></div>
              <p className="text-stone-600 font-sans leading-relaxed mb-6">
                I'm Elena Vance — an etiquette expert, business etiquette coach, and educator in body language and personality development, with over 12 years of global experience.
              </p>
              <p className="text-stone-600 font-sans leading-relaxed mb-6">
                From CEOs to teens, I've guided people in mastering communication, public speaking, and soft skills for personal and professional success.
              </p>
              <p className="text-stone-600 font-sans leading-relaxed font-medium italic">
                "I believe true empowerment begins when you know who you are — and express it with clarity, grace, and quiet strength."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioSection;