
import { FlashcardSet } from '@/components/FlashcardSet';
import { sampleFlashcardSet } from '@/data/sampleData';

export default function DashboardPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Your Flashcard Sets</h2>
      <FlashcardSet title="Truck Words Vol. 1" cards={sampleFlashcardSet} />
    </main>
  );
}
