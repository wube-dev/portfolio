import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";
import { Terminal, Globe, ChevronRight } from "lucide-react";
import profileImg from "../assets/iliyas.jpg";

const SYSTEM_STATS = [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects", value: "10+" },
  { label: "Focus", value: "Full-Stack" },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050508] overflow-hidden pt-16 selection:bg-blue-500/30">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8 backdrop-blur-md">
              <Terminal size={14} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Full-Stack Developer • React • Node • MySQL
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              WUB<span className="text-blue-600">SHET</span>
              <span className="block text-2xl md:text-4xl mt-4 font-light text-zinc-500 italic tracking-tight">
                Building Modern & Scalable Web Applications
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed">
              I design and develop responsive, high-performance web applications
              using <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Node.js</span>, and{" "}
              <span className="text-white font-medium">MySQL</span>, focusing on
              clean architecture, usability, and real-world problem solving.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-6 items-center">
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                className="group px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-500 transition-all cursor-pointer shadow-xl shadow-blue-600/20 active:scale-95"
              >
                View My Projects
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <div className="flex items-center gap-3 text-zinc-500 uppercase font-bold text-[10px] tracking-widest">
                <Globe
                  className={`text-blue-500 ${!shouldReduceMotion && "animate-spin-slow"}`}
                  size={18}
                />
                <span>Open to freelance & junior-mid roles</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (IMAGE) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600/15 blur-[120px] rounded-full" />

            <div className="relative w-full max-w-[420px] aspect-[4/5] mx-auto overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl group">
              <img
                src={profileImg}
                alt="Wubshet profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="flex justify-between items-center">
                  {SYSTEM_STATS.map((stat, idx) => (
                    <React.Fragment key={stat.label}>
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] text-zinc-400 uppercase font-black tracking-widest">
                          {stat.label}
                        </span>
                        <span className="text-white font-mono text-sm font-bold">
                          {stat.value}
                        </span>
                      </div>
                      {idx !== SYSTEM_STATS.length - 1 && (
                        <div className="w-px h-6 bg-white/10" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
