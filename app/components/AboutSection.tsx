export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-[#4b3cc9] mb-4">
          About Lakshya
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Lakshya means <span className="font-semibold">goal</span>.
          It helps students manage tasks, resources, and productivity in one
          calm, minimal dashboard.
        </p>
      </div>
    </section>
  );
}