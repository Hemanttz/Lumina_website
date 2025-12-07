import React from 'react';

const Clients: React.FC = () => {
  // Placeholder logos using text for simplicity/demo
  const clients = ['VOGUE', 'FORBES', 'CHANEL', 'DIOR', 'HERMES', 'HILTON'];

  return (
    <section id="clients" className="py-20 bg-stone-50 border-y border-stone-200">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-serif italic text-3xl mb-12 text-stone-800">Our Clients</h3>
        <p className="font-sans text-xs uppercase tracking-widest text-stone-500 mb-12">
            The Preferred Etiquette Partner for Industry Giants
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, idx) => (
                <div key={idx} className="font-display font-bold text-2xl md:text-3xl text-stone-800 tracking-wider">
                    {client}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
