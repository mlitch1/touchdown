
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-green-300 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-center text-blue-900 drop-shadow-xl mb-8">
        Welcome to BrainyBeasts!
      </h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Fun, energetic flashcards designed to help boys fall in love with learning. Trucks, dinos, rockets, sports, and more!
      </p>
      <Link href="/dashboard" className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl shadow-lg transition-all">
        Enter Dashboard
      </Link>
    </main>
  );
}
