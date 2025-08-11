
import React from 'react';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="prompt-input" className="block text-lg mb-2 text-green-400">
        Enter your prompt:
      </label>
      <textarea
        id="prompt-input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="A brave knight fighting a dragon..."
        className="w-full h-24 p-3 bg-gray-800 border-2 border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt}
        className="mt-4 w-full px-6 py-3 text-xl text-white bg-purple-600 border-b-4 border-purple-800 hover:bg-purple-500 hover:border-purple-700 disabled:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-400 active:border-b-0 active:mt-[22px] transition-all duration-150 ease-in-out"
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </button>
    </form>
  );
};
