import React from "react";

const Experience = () => {
  const journey = [
    {
      year: "2023 - Present",
      role: "Senior Full-Stack Developer",
      company: "Freelance / Project Contracts",
      desc: "Architecting scalable web apps using React and Node.js. Optimized MySQL databases reducing query times by 30%.",
    },
    {
      year: "2021 - 2023",
      role: "Full-Stack Developer",
      company: "Tech Solutions Inc.",
      desc: "Developed 10+ responsive frontend interfaces. Integrated secure JWT authentication and RESTful APIs.",
    },
    {
      year: "2019 - 2021",
      role: "Frontend Developer",
      company: "Creative Web Studio",
      desc: "Focused on HTML, CSS, and JavaScript. Specialized in Bootstrap and pixel-perfect UI implementation.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 dark:text-white text-center">
          Learning Journey & Experience
        </h2>
        <div className="space-y-12">
          {journey.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-12 relative"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[124px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>

              <div className="md:w-32 pt-1">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                  {item.year}
                </span>
              </div>

              <div className="relative flex-1 pb-12">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute -left-[53px] top-2 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)]"></div>

                <h3 className="text-xl font-bold dark:text-white mb-2">
                  {item.role}
                </h3>
                <h4 className="text-slate-500 dark:text-slate-400 font-medium mb-4">
                  {item.company}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
