"use client";
import Navbar from "../components/Navbar";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <main className="bg-[#f5f3ff] min-h-screen">
      <Navbar />
      <BlogSection />
      <Footer />
    </main>
  );
}