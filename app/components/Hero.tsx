export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="max-w-3xl text-center backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-10 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#4b3cc9] mb-6">
          Focus. Track. Achieve.
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Lakshya is a modern student dashboard to help you stay focused and
          goal-driven.
        </p>

        <a
          href="/sign-up"
          className="inline-block px-6 py-3 rounded-xl bg-[#6d5dfc] text-white font-medium hover:scale-105 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}