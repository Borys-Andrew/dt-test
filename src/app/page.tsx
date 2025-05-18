'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { cuisines } from '@/constanst';

export default function Home() {
  const [query, setQuery] = useState('pasta');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('60');
  const router = useRouter();

  const isNextEnabled =
    query.trim() !== '' || cuisine !== '' || maxReadyTime !== '';

  const handleNext = () => {
    const params = new URLSearchParams();
    if (query.trim() !== '') params.append('query', query.trim());
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);
    router.push(`/recipes?${params.toString()}`);
  };
  const handleClear = () => {
    setQuery('');
    setCuisine('');
    setMaxReadyTime('');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-black">
      <h1 className="mb-6 text-3xl font-bold">Recipe Finder</h1>
      <div className="w-full max-w-md rounded bg-white p-6 shadow-md">
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Search Query</label>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="e.g. pasta"
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block font-semibold">Cuisine</label>
          <select
            value={cuisine}
            onChange={e => setCuisine(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
          >
            <option value="">Select Cuisine</option>
            {cuisines.map(c => (
              <option key={c} value={c.toLowerCase()}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="mb-1 block font-semibold">
            Max Preparation Time (minutes)
          </label>
          <input
            type="number"
            min={1}
            value={maxReadyTime}
            onChange={e => setMaxReadyTime(e.target.value)}
            placeholder="e.g. 30"
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col gap-5">
          <button
            onClick={handleClear}
            className="w-full rounded border border-gray-400 bg-white py-2 font-semibold text-gray-700 hover:bg-gray-100"
          >
            Clear
          </button>
          <button
            disabled={!isNextEnabled}
            onClick={handleNext}
            className={`w-full rounded py-2 font-semibold text-white ${
              isNextEnabled
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'cursor-not-allowed bg-gray-400'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
