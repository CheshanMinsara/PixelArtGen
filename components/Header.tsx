
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-yellow-300 drop-shadow-[4px_4px_0_rgba(186,85,211,1)]">
        Pixel Art Generator
      </h1>
      <p className="text-sm text-gray-400 mt-2">Powered by Imagen 3</p>
    </header>
  );
};
