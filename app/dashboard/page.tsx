"use client";
export default function DashboardPage() {
  return (
    <main className="min-h-screen px-8 py-10 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Today</h2>
          <p className="text-gray-600">No tasks added yet.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Study Streak</h2>
          <p className="text-gray-600">🔥 0 days</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Focus Mode</h2>
          <p className="text-gray-600">Pomodoro coming soon.</p>
        </div>
      </div>
    </main>
  );
}