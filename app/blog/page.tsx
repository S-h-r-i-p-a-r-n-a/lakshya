"use client";
export default function BlogPage() {
  return (
    <main className="min-h-screen px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Blog & Resources</h1>

      <div className="space-y-6 max-w-2xl">
        <article className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">
            How to Stay Consistent While Studying
          </h2>
          <p className="text-gray-600">
            Consistency beats motivation. Learn how small habits compound over time.
          </p>
        </article>

        <article className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">
            Why Every Student Needs a Dashboard
          </h2>
          <p className="text-gray-600">
            Managing tasks, links, and progress in one place reduces mental load.
          </p>
        </article>
      </div>
    </main>
  );
}