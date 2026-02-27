import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6D9FF] to-white">
      <SignIn
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            card: "backdrop-blur-md bg-white/70",
          },
        }}
      />
    </div>
  );
}