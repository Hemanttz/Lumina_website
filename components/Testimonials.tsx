import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO, Horizon Media',
    image: 'https://picsum.photos/id/342/100/100',
    quote: "Lumina's sessions were impactful and essential. I gained the confidence I needed to lead my team effectively."
  },
  {
    id: '2',
    name: 'Rajiv Malhotra',
    role: 'Director, TechCorp',
    image: 'https://picsum.photos/id/338/100/100',
    quote: "A hardworking and dedicated approach. The specific feedback on my public speaking has been invaluable for my career."
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Founder, Luxe Interiors',
    image: 'https://picsum.photos/id/64/100/100',
    quote: "Bringing a refined, service-with-royalty approach that perfectly aligns with our brand ethos."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl text-stone-800 mb-4">Testimonials</h2>
          <p className="font-sans text-stone-500">Real words from real people — stories of growth, polish, and presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-stone-50 p-8 md:p-10 relative group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 right-6 text-stone-200 group-hover:text-stone-300 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div className="flex items-center mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4" />
                <div>
                  <h4 className="font-serif font-bold text-stone-800">{t.name}</h4>
                  <p className="text-xs uppercase tracking-wider text-stone-500">{t.role}</p>
                </div>
              </div>
              
              <p className="font-sans text-stone-600 leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
