const Hero = () => {
  
  return (
    <section className="mb-12 sm:mb-16" id="about">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Hi, I'm <span className="text-yellow-600 dark:text-yellow-400">Shivansh Tripathi</span></h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-secondary-gray mb-4 sm:mb-6">Pre-Final Year Engineering Undergrad</p>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
        I'm a passionate developer focused on <span className="text-yellow-600 dark:text-[hsl(48,84%,85%)]">Backend development</span>, <span className="text-yellow-600 dark:text-[hsl(48,84%,85%)]">DevOps</span> and <span className="text-yellow-600 dark:text-[hsl(48,84%,85%)]">Web3</span>. I also primarily code in C++ and occasionally solve problems
        on Leetcode.
        I'm currently pursuing my Bachelors of Technology from <a href="https://jaipur.manipal.edu/" className="text-yellow-600 dark:text-[hsl(48,84%,85%)] no-underline">Manipal University Jaipur</a>, specializing in
        Artificial Intelligence.
        When I'm not coding, you can find me exploring the vast stuff around Computer Science, doing photography and enjoying outdoor life.
      </p>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <a href="https://github.com/Shiva1803" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img
            src="/githubnew.png"
            alt="GitHub"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
          />
        </a>
        <a href="https://www.linkedin.com/in/shivansht1803/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img
            src="/linkedinnew.png"
            alt="LinkedIn"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
          />
        </a>
        <a href="https://x.com/iamShivanshT" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img
            src="/twitter.png"
            alt="Twitter"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
          />
        </a>
        <a href="mailto:shivansht2005@gmail.com" className="inline-block">
          <img
            src="/emaillogo.png"
            alt="Email"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
