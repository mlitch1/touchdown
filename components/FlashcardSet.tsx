
'use client';
import { useState } from 'react';

export function FlashcardSet({ title, cards }: { title: string; cards: { front: string; back: string; }[] }) {
  const [index, setIndex] = useState(0);
  const currentCard = cards[index];

  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="bg-white rounded-2xl shadow-md p-6 text-center">
        <div className="text-2xl font-bold mb-2">{currentCard.front}</div>
        <div className="text-gray-600">{currentCard.back}</div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setIndex((index - 1 + cards.length) % cards.length)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Previous
        </button>
        <span className="text-gray-700">Card {index + 1} of {cards.length}</span>
        <button
          onClick={() => setIndex((index + 1) % cards.length)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
