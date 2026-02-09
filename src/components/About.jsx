import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Layers, Cpu } from "lucide-react";

/* ----------------------------- DATA ----------------------------- */
const CORE_VALUES = [
  {
    icon: Zap,
    color: "text-yellow-500",
    title: "Performance First",
    desc: "Optimizing every byte for lightning-fast load times and smooth interactions.",
  },
  {
    icon: ShieldCheck,
    color: "text-green-500",
    title: "Clean & Secure",
    desc: "Architecting robust backend systems with strong data integrity and security.",
  },
  {
    icon: Layers,
    color: "text-blue-500",
    title: "Scalable Logic",
    desc: "Writing modular, reusable code that grows alongside business needs.",
  },
  {
    icon: Cpu,
    color: "text-purple-500",
    title: "Full-Stack Mindset",
    desc: "Bridging beautiful UI with powerful database-driven systems.",
  },
];

/* ----------------------------- ANIMATIONS ----------------------------- */
const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

/* ----------------------------- COMPONENT ----------------------------- */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-32 bg-white dark:bg-[#030303] transition-colors"
    >
      {/* Decorative Background Text */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-20 left-10 hidden text-[15rem] font-black text-black/[0.03] dark:text-white/[0.02] lg:block"
      >
        ABOUT
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ---------------- LEFT CONTENT ---------------- */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.4em] text-blue-600">
              The Developer Behind the Code
            </p>

            <h2
              id="about-heading"
              className="mb-8 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl leading-tight"
            >
              Bridging the gap between <br />
              <span className="italic text-zinc-500">Imagination</span> and{" "}
              <span className="text-blue-600">Execution</span>.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
              <p>
                I am{" "}
                <strong className="text-slate-900 dark:text-white">
                  Wubshet
                </strong>
                , a Full-Stack Developer passionate about building meaningful
                digital products. I specialize in the{" "}
                <strong className="text-slate-900 dark:text-white">
                  MERN stack
                </strong>{" "}
                and{" "}
                <strong className="text-slate-900 dark:text-white">
                  MySQL architecture
                </strong>
                , crafting the invisible engines behind modern web experiences.
              </p>

              <p>
                My philosophy is simple: <em>"Think twice, code once."</em> I
                focus on solving real business problems — from optimizing
                complex SQL queries to building pixel-perfect React interfaces
                that deliver measurable value.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10 border-t border-slate-200 pt-8 dark:border-white/5">
              {[
                { value: "03+", label: "Years Coding" },
                { value: "12+", label: "Tech Stack" },
                { value: "100%", label: "Commitment" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------------- RIGHT GRID ---------------- */}
          <div className="grid gap-4 sm:grid-cols-2">
            {CORE_VALUES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp(i * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all hover:border-blue-500/30 dark:border-white/5 dark:bg-[#0a0a0a]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110 dark:bg-white/5">
                    <Icon className={item.color} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-500">
                    {item.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
