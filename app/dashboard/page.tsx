import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F6F2FF] p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">
          Welcome to Lakshya 🎯
        </h1>
        <UserButton afterSignOutUrl="/" />
      </div>

      <p className="text-gray-700">
        This is your student dashboard. Protected by Clerk.
      </p>
    </main>
  );
}