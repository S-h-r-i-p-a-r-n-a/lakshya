"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#f5f3ff] min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <BlogSection />
      <Footer />
    </main>
  );
}