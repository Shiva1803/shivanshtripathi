import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  image?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Text In Sight",
      description: "NLP based sentence analyzer which returns sentiments (positive/negative) and themes (custom set) via BERT.",
      tags: ["Python", "Streamlit", "Python Libraries"],
      link: "https://github.com/Shiva1803/TextInSight",
      image: "/TextInSight.png"
    },
    {
      title: "Projectile Motion Simulator",
      description: "An interactive web app that visualizes projectile motion with real-time plots, velocity vectors, and customizable physics parameters like drag, wind, and launch angle.",
      tags: ["Fortran", "CSS", "JavaScript", "Python"],
      link: "https://github.com/Shiva1803/Projectile-Motion-Simulator",
      image: "/projectile-motion.jpg"
    },
    {
      title: "Owly",
      description: "Zero-Knowledge Notes & Passwords Manager built on Sui, utilizing Seal's encryption and Walrus' blob storage.",
      tags: ["Move", "Typescript", "React"],
      link: "https://github.com/Shiva1803/Owly",
      image: "/owly.png"
    }
  ]

  return (
    <section className="mb-12 sm:mb-16" id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>

      <style>{`
        @keyframes glow-sweep-dark {
          0% {
            box-shadow: -100px 0 30px rgba(255, 255, 255, 0.3) inset,
                        0 0 20px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 100px 0 30px rgba(255, 255, 255, 0.3) inset,
                        0 0 20px rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes glow-sweep-light {
          0% {
            box-shadow: -100px 0 30px rgba(0, 0, 0, 0.1) inset,
                        0 0 20px rgba(0, 0, 0, 0.1);
          }
          100% {
            box-shadow: 100px 0 30px rgba(0, 0, 0, 0.1) inset,
                        0 0 20px rgba(0, 0, 0, 0.1);
          }
        }
        
        .view-all-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%);
          animation: glow-sweep-light 3s ease-in-out infinite alternate;
        }

        html.dark .view-all-btn {
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          animation: glow-sweep-dark 3s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="flex justify-start">
        <Link
          to="/projects"
          className="view-all-btn px-5 py-2 rounded-full border border-black dark:border-white text-black dark:text-white font-normal text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          VIEW ALL PROJECTS
          <span className="text-lg">→</span>
        </Link>
      </div>
    </section >
  )
}

export default Projects
