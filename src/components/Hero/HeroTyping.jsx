import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroTyping = () => {
  return (
    <div className="min-h-[60px] md:min-h-[80px] flex items-center mb-6">
      <TypeAnimation
        sequence={[
          'Precision Engineering for Industrial Scale',
          1000,
          'Advanced CNC Machining & Plastic Solutions',
          1000,
          'High-Volume OEM Manufacturing & Exports',
          1000,
          'Reliable Infrastructure for Enterprise Growth',
          1000,
        ]}
        wrapper="h1"
        speed={50}
        style={{ 
          display: 'inline-block',
          fontWeight: '900',
        }}
        className="text-4xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]"
        repeat={Infinity}
      />
    </div>
  );
};

export default HeroTyping;
