const Skills = () => {
  const skills = [
    "C/C++",
    "Python",
    "Node.js",
    "Express.js",
    "TypeScript",
    "React",
    "MongoDB",
    "MySQL",
    "Move on Sui"
  ]

  return (
    <section className="mb-12 sm:mb-16" id="skills">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-light-gray border border-gray-400 dark:border-[#495057] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 cursor-default hover:border-black dark:hover:border-white hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.3),inset_0_0_10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3),inset_0_0_10px_rgba(255,255,255,0.1)] hover:text-black dark:hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
