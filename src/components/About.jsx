import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Layers, Cpu } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Performance First",
      desc: "Optimizing every byte for lightning-fast load times and smooth interactions.",
    },
    {
      icon: <ShieldCheck className="text-green-500" />,
      title: "Clean & Secure",
      desc: "Architecting robust backend systems with a focus on data integrity and security.",
    },
    {
      icon: <Layers className="text-blue-500" />,
      title: "Scalable Logic",
      desc: "Writing modular, reusable code that grows alongside your business needs.",
    },
    {
      icon: <Cpu className="text-purple-500" />,
      title: "Full-Stack Mindset",
      desc: "Bridging the gap between beautiful design and complex database management.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-20 left-10 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-600 font-mono text-sm uppercase tracking-[0.4em] mb-6">
              The Developer Behind the Code
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              Bridging the gap between <br />
              <span className="text-zinc-500 italic">Imagination</span> and{" "}
              <span className="text-blue-500">Execution</span>.
            </h3>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Wubshet</span>, a
                Full-Stack Developer with a deep-rooted passion for engineering
                digital products that matter. With specialized expertise in the
                <span className="text-white"> MERN stack</span> and{" "}
                <span className="text-white">MySQL architecture</span>, I focus
                on building the invisible engines that power modern web
                experiences.
              </p>
              <p>
                My approach is simple:{" "}
                <span className="italic">"Think twice, code once."</span>I don't
                just build features; I solve business problems. Whether it's
                optimizing a complex SQL query or crafting a pixel-perfect React
                interface, I ensure every line of code adds value to the end
                user.
              </p>
            </div>

            {/* Quick Stats Signature */}
            <div className="mt-12 pt-8 border-t border-white/5 flex gap-10">
              <div>
                <p className="text-3xl font-black text-white tracking-tighter">
                  03+
                </p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mt-1">
                  Years Coding
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-white tracking-tighter">
                  12+
                </p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mt-1">
                  Tech Stack
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-white tracking-tighter">
                  100%
                </p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mt-1">
                  Commitment
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Value Cards (The Bento Grid) */}
          <div className="grid sm:grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.3)" }}
                className="p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-3 tracking-tight">
                  {value.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
