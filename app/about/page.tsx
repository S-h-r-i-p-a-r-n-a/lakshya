"use client";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f3ff] min-h-screen">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}