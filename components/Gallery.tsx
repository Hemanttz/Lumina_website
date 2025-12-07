import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop', // Man in suit profile
    'https://images.unsplash.com/photo-1529139574466-a3005c404464?q=80&w=600&auto=format&fit=crop', // Woman elegant
    'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop', // Fashion detail (Replaced broken link)
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop', // Photography/lifestyle
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop', // Business suit
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop', // Wedding/Event
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop', // Colleagues
    'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop', // Toast
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl text-stone-800 mb-4">Gallery</h2>
          <div className="w-12 h-0.5 bg-stone-800 mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, idx) => (
                <div key={idx} className="break-inside-avoid">
                    <img 
                        src={src} 
                        alt="Gallery item" 
                        className="w-full rounded-sm hover:opacity-90 transition-opacity duration-300 shadow-md"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;