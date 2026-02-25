"use client";
export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">🎯 Lakshya</h1>

      <p className="text-gray-600 max-w-xl text-center mb-8">
        Lakshya is a focused student dashboard to manage tasks, study resources,
        and daily progress — all in one calm space.
      </p>

      <div className="flex gap-4">
        <a
          href="/sign-up"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Get Started
        </a>

        <a
          href="/about"
          className="px-6 py-3 border rounded-lg hover:bg-gray-100"
        >
          About
        </a>
      </div>
    </main>
  );
}