
import React from 'react';
import { Loader } from './Loader';

interface PixelArtDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

export const PixelArtDisplay: React.FC<PixelArtDisplayProps> = ({ imageUrl, isLoading, error }) => {
  if (isLoading) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Loader />
            <p className="mt-4 text-lg text-yellow-300">Creating your masterpiece...</p>
        </div>
    );
  }

  if (error) {
    return <p className="text-red-400 text-center">{error}</p>;
  }

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt="Generated pixel art"
        className="max-w-full max-h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
      />
    );
  }

  return (
    <div className="text-center text-gray-500 flex flex-col items-center">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      <p className="text-lg">Your pixel art will appear here.</p>
    </div>
  );
};
