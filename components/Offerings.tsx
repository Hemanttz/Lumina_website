import React from 'react';
import { Offering } from '../types';

const offerings: Offering[] = [
  {
    id: '1',
    title: 'Executive Leadership Program',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    description: 'Master the art of corporate command.'
  },
  {
    id: '2',
    title: 'Elegant Lady Program',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
    description: 'Refine your social graces and style.'
  },
  {
    id: '3',
    title: 'Business Etiquette & Grooming',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    description: 'Professional presence for the modern era.'
  },
  {
    id: '4',
    title: 'International Dining Etiquette',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop',
    description: 'Navigate any table with confidence.'
  },
  {
    id: '5',
    title: 'The Gentleman Code',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    description: 'Chivalry and charm for today\'s man.'
  },
  {
    id: '6',
    title: 'The Refined Bride & Groom',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop',
    description: 'Prepare for your most important day.'
  },
];

const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl text-stone-800 mb-4">Our Offerings</h2>
          <p className="font-sans text-stone-500 max-w-2xl mx-auto">
            From first impressions to lasting impact — LUMINA's offerings sculpt the finest version of you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/2] mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-stone-800 text-center mb-2 group-hover:text-stone-600 transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-stone-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;