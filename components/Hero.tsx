import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/DfWt7Qtv/Gemini-Generated-Image-lev9ohlev9ohlev9.png" 
          alt="Professional woman giving seminar to a crowd" 
          className="w-full h-full object-cover object-top"
        />
        {/* Light overlay for premium beige/gold aesthetic - removed blur for clarity */}
        <div className="absolute inset-0 bg-stone-50/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <h2 className="font-serif italic text-2xl md:text-3xl text-stone-800 mb-6 drop-shadow-sm">
          Your Partner in Professional and Personal Growth
        </h2>
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-stone-900 tracking-[0.05em] font-bold mb-10 drop-shadow-sm leading-tight">
          Cultivate a Life of<br/>Grace and Purpose
        </h1>
        <div className="flex justify-center gap-4">
            <Button variant="primary">
                Our Offerings
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;