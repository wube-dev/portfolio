import React from "react";
import { motion } from "framer-motion";
import { PROJECTS, TECH_STACK } from "../data/data";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-mono text-sm uppercase tracking-[0.3em] mb-4"
            >
              Excellence in Execution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter"
            >
              Practical{" "}
              <span className="text-zinc-500 font-light italic">
                Engineering
              </span>
            </motion.h2>
          </div>
          <div className="text-zinc-500 font-mono text-sm">
            / 002 — PROJECTS
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/30"
            >
              {/* Image & Hover Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* GLASS OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    className="p-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
                  >
                    <Github size={24} className="text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    target="_blank"
                    className="p-4 bg-blue-600 rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all"
                  >
                    <ExternalLink size={24} className="text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[1px] bg-blue-500"></span>
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">
                    {project.clue}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                {/* class="mt-auto flex flex-wrap gap-2 bg-slate-100 transition-all duration-300 hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-lg */}
                {/* Tech Stack */}
                <div className="mt-auto flex flex-wrap gap-2  ">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="hover:border-blue-500  flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-white/5 border border-white/10 rounded-full text-zinc-300"
                    >
                      {TECH_STACK[tech] && (
                        <img
                          src={TECH_STACK[tech]}
                          alt={tech}
                          className="w-3 h-3 grayscale group-hover:grayscale-0 transition-all"
                        />
                      )}
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
