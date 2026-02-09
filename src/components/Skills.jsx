import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "../data/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-purple-600" />
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
              Expertise
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-purple-600 to-blue-600" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Technical{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl" />
            </span>
          </h2>

          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            A comprehensive toolkit meticulously curated for architecting
            <span className="text-blue-400 font-semibold"> scalable</span>,{" "}
            <span className="text-purple-400 font-semibold"> secure</span>, and{" "}
            <span className="text-cyan-400 font-semibold">
              {" "}
              visually stunning
            </span>{" "}
            digital experiences.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-8">
          {TECH_STACK.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: catIdx * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-[2.5rem] backdrop-blur-sm overflow-hidden">
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="relative">
                  <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-[0.2em] mb-8 pb-4 border-b border-white/10 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                    {category.category}
                  </h3>

                  <div className="space-y-8">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIdx * 0.1 + catIdx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                        className="group/skill relative"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-0 group-hover/skill:opacity-60 transition-opacity" />
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="relative w-8 h-8 z-10 transition-all duration-300 group-hover/skill:scale-110"
                              />
                            </div>
                            <span className="text-white font-semibold text-base tracking-tight">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-zinc-400 text-xs font-mono px-3 py-1 bg-white/5 rounded-full">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Enhanced Progress Bar */}
                        <div className="relative h-2 w-full bg-zinc-900/50 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/30 to-zinc-800/10" />
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.8,
                              ease: [0.22, 1, 0.36, 1],
                              delay: skillIdx * 0.05 + catIdx * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-lg shadow-blue-500/30"
                          >
                            {/* Progress bar shine */}
                            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                          </motion.div>

                          {/* Animated dots on progress bar */}
                          <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: skillIdx * 0.1,
                            }}
                            className="absolute top-0 w-4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Category stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 pt-6 border-t border-white/5"
                  >
                    <p className="text-zinc-500 text-sm">
                      <span className="text-blue-400 font-semibold">
                        {category.skills.length} Technologies
                      </span>{" "}
                      <span className="mx-2">•</span>
                      <span className="text-zinc-400">
                        Mastery average:{" "}
                        <span className="text-white font-bold">
                          {Math.round(
                            category.skills.reduce(
                              (acc, skill) => acc + skill.level,
                              0,
                            ) / category.skills.length,
                          )}
                          %
                        </span>
                      </span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {TECH_STACK.reduce((acc, cat) => acc + cat.skills.length, 0)}+
              </div>
              <p className="text-zinc-400 text-sm">Total Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-zinc-400 text-sm">Production Ready</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-zinc-400 text-sm">Continuous Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
