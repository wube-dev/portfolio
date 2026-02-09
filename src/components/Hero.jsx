import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  Terminal,
  Cpu,
  Globe,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import profileImg from "../assets/iliyas.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#050508] overflow-hidden pt-16"
    >
      {/* Background Noise & Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Senior Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8 backdrop-blur-xl">
              <Terminal size={14} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                System Architect // v2.0.25
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              WUB<span className="text-blue-600">SHET</span>
              <span className="block text-2xl md:text-4xl mt-4 font-light text-zinc-500 italic tracking-normal">
                Engineering Resilient Foundations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed">
              Specializing in{" "}
              <span className="text-white">Enterprise Architectures</span>,
              scalable <span className="text-white">Cloud Logic</span>, and
              high-performance full-stack orchestration.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                to="projects"
                smooth={true}
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-500 transition-all cursor-pointer shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Explore My Systems{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <div className="flex items-center gap-3 text-zinc-500 uppercase font-bold text-[10px] tracking-widest">
                <Globe className="animate-spin-slow text-blue-500" size={18} />
                <span>Available for Global Contracts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Glow Halo */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] animate-pulse rounded-full" />

            <div className="relative w-full max-w-[450px] aspect-[4/5] mx-auto overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
              <img
                src={profileImg}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                alt="Wubshet"
              />

              {/* Floating Performance Data */}
              <div className="absolute bottom-10 left-6 right-6 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-black">
                      Uptime
                    </span>
                    <span className="text-white font-mono font-bold">
                      99.99%
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-black">
                      Architecture
                    </span>
                    <span className="text-white font-mono font-bold">
                      Scalable
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-black">
                      Latency
                    </span>
                    <span className="text-white font-mono font-bold">
                      &lt; 100ms
                    </span>
                  </div>
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
