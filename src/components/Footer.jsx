import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/wube-dev",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/EliyasAwraris",
      label: "Twitter",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 240"
          fill="currentColor"
          width={20}
          height={20}
        >
          <path d="M120,0C53.73,0,0,53.73,0,120s53.73,120,120,120s120-53.73,120-120S186.27,0,120,0z M177.1,84.87 l-21.11,99.8c-1.58,6.8-5.73,8.5-11.57,5.31l-31.92-23.56l-15.38,14.81c-1.7,1.7-3.13,3.13-6.42,3.13l2.3-32.36 l58.99-53.3c2.56-2.3-0.56-3.59-3.96-1.29l-72.91,45.9L63.46,99.38c-2.56-2.56-5.23-2.56-5.23-5.23c0-2.56,2.3-3.59,5.23-5.23 l104.64-40.32C175.18,48.64,179.5,51.1,177.1,84.87z" />
        </svg>
      ),
      href: "https://t.me/wube_dev",
      label: "Telegram",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          width={20}
          height={20}
        >
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 90.8 225.8 208.5 242v-171h-63v-71h63v-54.2c0-62.2 37-96.8 93.7-96.8 27.1 0 55.5 4.8 55.5 4.8v61h-31.2c-30.8 0-40.3 19.1-40.3 38.7V256h68.7l-11 71H287.7v171C405.2 481.8 504 379.5 504 256z" />
        </svg>
      ),
      href: "https://web.facebook.com/ela.aw.2025",
      label: "Facebook",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:eliyasawraris922@gmail.com",
      label: "Email",
    },
  ];


  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter text-white">
              WUB<span className="text-blue-600">SHET.</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              A Full-Stack Engineer dedicated to building high-performance,
              scalable, and user-centric digital solutions. Based in Ethiopia,
              available for global opportunities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, color: "#2563eb" }}
                  className="text-zinc-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">
              Navigation
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                className="text-zinc-500 hover:text-blue-500 text-sm cursor-pointer transition-colors w-fit"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact & Back to Top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                Work Inquiry
              </h4>
              <p className="text-zinc-500 text-sm mb-2">
                Have a project in mind?
              </p>
              <a
                href="mailto:wube@example.com"
                className="text-white font-bold hover:text-blue-500 transition-colors"
              >
                wube@example.com
              </a>
            </div>

            {/* Back to Top Button */}
            <Link
              to="hero"
              smooth={true}
              className="mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl text-zinc-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer group"
            >
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {currentYear} Wubshet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-zinc-600 text-xs flex items-center gap-2">
              Built with <span className="text-blue-600 font-bold">React</span>{" "}
              & <span className="text-blue-600 font-bold">Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
