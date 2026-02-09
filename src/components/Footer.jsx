import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Twitter,
  Send,
  Facebook,
} from "lucide-react";

// Centralized Config - Easier to update later
const CONTACT_EMAIL = "eliyasawraris922@gmail.com";
const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/wube-dev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/EliyasAwraris", label: "Twitter" },
  { icon: Send, href: "https://t.me/wube_dev", label: "Telegram" },
  {
    icon: Facebook,
    href: "https://web.facebook.com/ela.aw.2025",
    label: "Facebook",
  },
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
];

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-20 pb-10 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand Architecture */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter text-white">
              WUB<span className="text-blue-600">SHET.</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Engineer specialized in building high-performance,
              distributed systems and resilient digital architecture. Based in
              Ethiopia, operating globally.
            </p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, color: "#3b82f6" }}
                    className="text-zinc-500 transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Internal Mapping */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth={true}
                  offset={-100}
                  className="text-zinc-500 hover:text-blue-400 text-sm cursor-pointer transition-colors w-fit flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Communication & Control */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4 opacity-50">
                Direct Inquiry
              </h4>
              <p className="text-zinc-500 text-sm mb-2">
                Ready to scale your next project?
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-lg text-white font-mono font-bold hover:text-blue-500 transition-colors underline decoration-blue-500/30 underline-offset-8"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <Link
              to="hero"
              smooth={true}
              className="mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl text-zinc-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer group backdrop-blur-sm"
            >
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Integrity Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © {currentYear} Wubshet Awraris // All Systems Operational
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 text-[10px] font-bold uppercase tracking-tighter">
                Status: Open for Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
