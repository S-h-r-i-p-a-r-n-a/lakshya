export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4b3cc9] mb-10 text-center">
          From the Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-md hover:scale-105 transition"
            >
              <h3 className="font-semibold mb-2">Blog Title {item}</h3>
              <p className="text-sm text-gray-600">
                Short description of the blog post goes here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}