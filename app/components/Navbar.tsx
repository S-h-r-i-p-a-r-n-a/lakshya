"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/40 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-purple-700">
          Lakshya
        </span>

        <div className="flex items-center gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>

          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 rounded-xl bg-purple-600 text-white"
            >
              Sign In
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-xl bg-white/60 border border-purple-300"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}