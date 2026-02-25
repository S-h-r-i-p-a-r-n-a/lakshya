export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-widest text-[#6d5dfc]"
        >
          LAKSHYA
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-[#6d5dfc]">Home</a>
          <a href="#about" className="hover:text-[#6d5dfc]">About</a>
          <a href="#blog" className="hover:text-[#6d5dfc]">Blog</a>
        </div>

        {/* Auth */}
        <a
          href="/sign-in"
          className="px-4 py-2 rounded-xl bg-[#6d5dfc] text-white text-sm hover:opacity-90 transition"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}