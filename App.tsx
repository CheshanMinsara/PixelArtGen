
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { PixelArtDisplay } from './components/PixelArtDisplay';
import { generatePixelArt } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const b64Json = await generatePixelArt(prompt);
      setImageUrl(b64Json);
    } catch (err) {
      console.error(err);
      setError('Failed to generate pixel art. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <Header />
        <main className="mt-8">
          <div className="bg-[#2a2a2e] border-4 border-gray-500 p-6 shadow-[8px_8px_0px_#4a5568]">
            <PromptForm
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />
          </div>
          <div className="mt-8 bg-[#2a2a2e] border-4 border-gray-500 min-h-[320px] sm:min-h-[420px] flex items-center justify-center p-4 shadow-[8px_8px_0px_#4a5568]">
            <PixelArtDisplay
              imageUrl={imageUrl}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
