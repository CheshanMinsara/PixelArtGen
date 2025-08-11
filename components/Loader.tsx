
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="w-16 h-16 grid grid-cols-2 grid-rows-2 gap-1 animate-spin">
      <div className="bg-green-400"></div>
      <div className="bg-yellow-400"></div>
      <div className="bg-purple-400"></div>
      <div className="bg-pink-400"></div>
    </div>
  );
};
