import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { SovietAircraftTimeline } from './charts/SovietAircraftTimeline'
import { DesignPhilosophyChart } from './charts/DesignPhilosophyChart'

const BlogPost3: React.FC = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [rainIntensity, setRainIntensity] = useState(150)

  const intensityLevels = [150, 250, 350, 450]

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleRainClick = () => {
    const currentIndex = intensityLevels.indexOf(rainIntensity)
    const nextIndex = (currentIndex + 1) % intensityLevels.length
    const newIntensity = intensityLevels[nextIndex]
    setRainIntensity(newIntensity)
    window.dispatchEvent(new CustomEvent('rainIntensityChange', { detail: newIntensity }))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark text-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="sticky top-4 z-40 px-4 mb-8">
        <header className="flex justify-between items-center bg-black/5 dark:bg-white/15 backdrop-blur-md rounded-full px-6 py-4 border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-300 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="/rainmeter2.png"
              alt="Rain Control"
              onClick={handleRainClick}
              className="h-8 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] dark:hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer"
              title={`Rain Intensity: ${rainIntensity === 150 ? 'Light' : rainIntensity === 250 ? 'Medium' : rainIntensity === 350 ? 'Heavy' : 'Storm'}`}
            />
            <div className="text-2xl font-bold text-black dark:text-white logo-glow-text" onClick={handleLogoClick}>shivansh</div>
          </div>
          <Link to="/blogs" className="text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors">
            Back to Blogs
          </Link>
        </header>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="max-w-3xl mx-auto">
            <article>
              {/* Hero Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/SovietAerospace.png" 
                  alt="Soviet aerospace engineering" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                  Form follows function — Soviet aerospace design prioritized performance over aesthetics, yet achieved both
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
                Soviet Aerospace: Brutal yet Beautiful
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Published: December 2025
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Soviet aerospace engineering represents one of the most fascinating chapters in aviation history — a story of innovation born from necessity, where extreme constraints bred radical solutions. The aesthetic that emerged wasn't designed to be beautiful; it was designed to work. Yet in that uncompromising functionality lies a stark, industrial beauty that continues to captivate engineers and designers decades later.
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">01</span>
                Form Follows Function — Ruthlessly
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Western aerospace design often balanced performance with marketability and comfort. Soviet design had no such luxury. Every kilogram mattered. Every surface had to justify its existence. The result was aircraft that looked like they were carved from solid blocks of purpose.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Consider the MiG-25 Foxbat — built primarily from steel because titanium was scarce, yet capable of Mach 3.2. Or the Tupolev Tu-95 Bear, a turboprop strategic bomber that remains in service today, its contra-rotating propellers creating a distinctive acoustic signature audible from miles away.
              </p>

              {/* Chart 1 - Aircraft Timeline */}
              <SovietAircraftTimeline />

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
                  <strong>Design Philosophy:</strong> Soviet engineers operated under the principle that if a component didn't directly contribute to the mission, it didn't belong on the aircraft. This led to designs that were raw, exposed, and unapologetically industrial.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">02</span>
                Innovation Through Constraint
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Limited access to advanced materials and manufacturing techniques forced Soviet engineers to think differently. They couldn't always build lighter or more precise — so they built smarter.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold text-xl">•</span>
                  <div>
                    <strong className="text-black dark:text-white">Robust Over Refined:</strong>
                    <span className="text-black/80 dark:text-white/80"> Soviet aircraft were designed to operate from unprepared runways, in extreme cold, with minimal ground support. The Su-25 Frogfoot could take off from dirt strips and sustain significant battle damage while remaining airworthy.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold text-xl">•</span>
                  <div>
                    <strong className="text-black dark:text-white">Simplicity as Strategy:</strong>
                    <span className="text-black/80 dark:text-white/80"> The AK-47 philosophy extended to aerospace — fewer parts meant fewer failures. The MiG-21 had a remarkably simple airframe that could be maintained by conscripts with basic tools.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold text-xl">•</span>
                  <div>
                    <strong className="text-black dark:text-white">Unconventional Solutions:</strong>
                    <span className="text-black/80 dark:text-white/80"> When precision manufacturing was unavailable, Soviet engineers embraced asymmetry and approximation. The result was aircraft that looked rough but performed reliably.</span>
                  </div>
                </li>
              </ul>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">03</span>
                The Aesthetic of Brutalism
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Soviet aerospace shares DNA with Brutalist architecture — both movements emerged from similar constraints and philosophies. Exposed rivets, angular surfaces, visible structural elements. Nothing hidden, nothing decorative. The beauty lies in the honesty of the design.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                The Buran space shuttle, the Soviet response to NASA's Space Shuttle, exemplified this aesthetic. While visually similar to its American counterpart, the Buran was designed for fully automated flight — it completed its only spaceflight without a crew, landing autonomously in crosswinds. The engineering was elegant in its directness.
              </p>

              {/* Chart 2 - Design Philosophy */}
              <DesignPhilosophyChart />

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6 rounded-r-lg">
                <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
                  <strong>Cultural Context:</strong> Soviet design reflected the broader cultural emphasis on collectivism and utilitarianism. Individual comfort was secondary to system performance. This created machines that felt almost alien in their single-minded focus on the mission.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">04</span>
                Legacy and Influence
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Today, Soviet aerospace design influences everything from science fiction aesthetics to modern engineering philosophy. The emphasis on robustness over refinement, on solving problems with available resources rather than waiting for ideal conditions, remains relevant.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Modern space companies like SpaceX echo some of these principles — rapid iteration, acceptance of imperfection, focus on what works rather than what looks good in marketing materials. The Starship rocket, with its exposed stainless steel and industrial appearance, would feel at home in a Soviet design bureau.
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">05</span>
                Why It Still Matters
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                In an era of over-designed products and feature bloat, Soviet aerospace reminds us that constraints can be creative forces. That beauty can emerge from pure function. That the most elegant solution is often the simplest one that works.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
                The brutalist aesthetic of Soviet aerospace wasn't a choice — it was a necessity. But in that necessity, engineers created something that transcended its origins: machines that were simultaneously harsh and graceful, crude and sophisticated, brutal and beautiful.
              </p>

              <div className="bg-gradient-to-r from-accent-blue/10 to-purple-500/10 border border-accent-blue/30 rounded-xl p-6 my-8">
                <p className="text-base md:text-lg leading-relaxed text-black/90 dark:text-white/90 italic">
                  "The best design is the one that works with what you have, not what you wish you had. Soviet aerospace proved that limitation breeds innovation."
                </p>
              </div>
            </article>
        </div>
      </div>

      <style>{`
        .logo-glow-text {
          cursor: pointer;
          transition: text-shadow 0.3s ease;
        }
        
        .logo-glow-text:hover {
          text-shadow: 0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15;
        }
      `}</style>
    </div>
  )
}

export default BlogPost3
