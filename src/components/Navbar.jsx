import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll for a senior "Glassmorphism" effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/70 dark:bg-[#030305]/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 size={20} className="text-white" />
          </div>
          <div className="font-black text-2xl dark:text-white tracking-tighter">
            WU<span className="text-blue-600">BE.</span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              spy={true}
              activeClass="text-blue-600"
              className="text-[15px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-white cursor-pointer transition-all"
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE CONTROLS (Hamburger & Theme Toggle) */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-white outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#030305] border-b border-slate-200 dark:border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-lg font-black uppercase tracking-widest text-slate-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
