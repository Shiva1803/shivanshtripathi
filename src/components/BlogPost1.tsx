import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { SpeedTrustChart } from './charts/SpeedTrustChart'
import { ErrorAmplificationChart } from './charts/ErrorAmplificationChart'
import { TrustOversightMatrix } from './charts/TrustOversightMatrix'

const BlogPost1: React.FC = () => {
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

  // Trust Meter State
  const [accuracy, setAccuracy] = useState(75)
  const [hallucinationRisk, setHallucinationRisk] = useState(30)
  const [humanOversight, setHumanOversight] = useState(50)
  const [taskStakes, setTaskStakes] = useState<'low' | 'medium' | 'high'>('medium')

  const computeTrustScore = () => {
    const base = accuracy - hallucinationRisk
    const oversightBonus = humanOversight * 0.5
    const stakesPenalty = taskStakes === 'high' ? 30 : taskStakes === 'medium' ? 15 : 0
    return Math.max(0, Math.min(100, base + oversightBonus - stakesPenalty))
  }

  const trustScore = computeTrustScore()

  const getTrustLabel = () => {
    if (trustScore >= 70) return 'High Trust'
    if (trustScore >= 40) return 'Moderate Trust'
    return 'Low Trust'
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
                  src="/SR-71.jpg" 
                  alt="AI operating at extreme speed illustration" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                  Metaphor: Speed without oversight — Can we trust systems operating beyond human verification capacity?
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
                Can an LLM Be Trusted at Mach 5?
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Published: January 2026
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Artificial intelligence systems, especially large language models (LLMs), have become astonishingly capable over the past few years — generating code, summarizing research, creating art, and even drafting legal text. But as they grow faster and more powerful, a pressing question emerges: Can we trust these models when they operate at speeds or scales where humans can't keep up — metaphorically, at "Mach 5"?
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
                For the purposes of this article, <strong>Mach 5</strong> is not about aerodynamics. It stands for decision-making speed and complexity far beyond human processing, where LLMs might produce outputs faster than people can meaningfully evaluate them.
              </p>

              {/* Chart 1 - Speed vs Trust */}
              <SpeedTrustChart />

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">01</span>
                Reliability and Hallucination
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                LLMs are trained to predict the next token based on patterns seen in vast datasets — and this very strength also shapes their core limitation. They do not "understand" information in the human sense; they generate plausible continuations based on statistical correlations. Because of this, they sometimes produce <strong>hallucinations</strong> — responses that may be coherent but factually incorrect or misleading.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Even highly advanced models can generate convincingly structured misinformation, and researchers have observed that hallucination rates do not always decrease monotonically with model size.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6 rounded-r-lg">
                <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
                  <strong>Implication:</strong> At ultra-rapid output speeds — where humans aren't scrutinizing every word — the chance of propagating inaccurate or misleading statements increases exponentially.
                </p>
              </div>

              {/* Chart 2 - Error Amplification */}
              <ErrorAmplificationChart />

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">02</span>
                The Trust Paradox
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                As LLMs become better at sounding authoritative and fluent, they also become harder to vet. This phenomenon — sometimes called the <strong>AI trust paradox</strong> — occurs because advanced models produce text that feels correct, even when it's not.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                A system that combines speed with this kind of fluency can easily outpace the user's ability to verify its output. Therefore, trust becomes <em>perceived</em> rather than <em>verified</em> — a risky situation for tasks with real-world consequences.
              </p>

              {/* Interactive Trust Dynamics - Horizontal */}
              <div className="my-12 bg-[#f9f7f2] dark:bg-[#1a1a1a] rounded-sm p-8 border border-[#d4cfc4] dark:border-[#2a2a2a]">
                <div className="mb-6">
                  <h3 className="text-xl font-serif mb-2 text-[#2c2c2c] dark:text-[#e8e6e1] tracking-tight">
                    Interactive Trust Model
                  </h3>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light">
                    Explore how system parameters affect trustworthiness
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left: Controls */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <label className="text-sm text-[#2c2c2c] dark:text-[#e8e6e1] font-light tracking-wide">
                          Accuracy
                        </label>
                        <span className="font-mono text-sm text-[#6b6b6b] dark:text-[#9a9a9a]">
                          {accuracy}%
                        </span>
                      </div>
                      <div className="relative h-3 bg-[#e5e0d8] dark:bg-[#2a2a2a] rounded-full">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={accuracy}
                          onChange={(e) => setAccuracy(Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div 
                          className="absolute left-0 top-0 h-full bg-[#5a7a5a] dark:bg-[#6a9a6a] transition-all duration-300 rounded-full"
                          style={{ width: `${accuracy}%` }}
                        ></div>
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2c2c2c] dark:bg-white border-2 border-white dark:border-[#1a1a1a] transition-all duration-300 shadow-lg"
                          style={{ left: `calc(${accuracy}% - 8px)` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <label className="text-sm text-[#2c2c2c] dark:text-[#e8e6e1] font-light tracking-wide">
                          Hallucination Risk
                        </label>
                        <span className="font-mono text-sm text-[#6b6b6b] dark:text-[#9a9a9a]">
                          {hallucinationRisk}%
                        </span>
                      </div>
                      <div className="relative h-3 bg-[#e5e0d8] dark:bg-[#2a2a2a] rounded-full">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={hallucinationRisk}
                          onChange={(e) => setHallucinationRisk(Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div 
                          className="absolute left-0 top-0 h-full bg-[#a05a5a] dark:bg-[#c07a7a] transition-all duration-300 rounded-full"
                          style={{ width: `${hallucinationRisk}%` }}
                        ></div>
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2c2c2c] dark:bg-white border-2 border-white dark:border-[#1a1a1a] transition-all duration-300 shadow-lg"
                          style={{ left: `calc(${hallucinationRisk}% - 8px)` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <label className="text-sm text-[#2c2c2c] dark:text-[#e8e6e1] font-light tracking-wide">
                          Human Oversight
                        </label>
                        <span className="font-mono text-sm text-[#6b6b6b] dark:text-[#9a9a9a]">
                          {humanOversight}%
                        </span>
                      </div>
                      <div className="relative h-3 bg-[#e5e0d8] dark:bg-[#2a2a2a] rounded-full">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={humanOversight}
                          onChange={(e) => setHumanOversight(Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div 
                          className="absolute left-0 top-0 h-full bg-[#5a7a5a] dark:bg-[#6a9a6a] transition-all duration-300 rounded-full"
                          style={{ width: `${humanOversight}%` }}
                        ></div>
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2c2c2c] dark:bg-white border-2 border-white dark:border-[#1a1a1a] transition-all duration-300 shadow-lg"
                          style={{ left: `calc(${humanOversight}% - 8px)` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#2c2c2c] dark:text-[#e8e6e1] font-light tracking-wide mb-3">
                        Task Stakes
                      </label>
                      <div className="flex gap-2">
                        {(['low', 'medium', 'high'] as const).map((stake) => (
                          <button
                            key={stake}
                            onClick={() => setTaskStakes(stake)}
                            className={`flex-1 py-2 text-xs font-light tracking-wide transition-all duration-300 ${
                              taskStakes === stake
                                ? 'bg-[#2c2c2c] dark:bg-[#e8e6e1] text-[#f9f7f2] dark:text-[#1a1a1a]'
                                : 'bg-transparent text-[#6b6b6b] dark:text-[#9a9a9a] border border-[#d4cfc4] dark:border-[#3a3a3a] hover:border-[#2c2c2c] dark:hover:border-[#e8e6e1]'
                            }`}
                          >
                            {stake.charAt(0).toUpperCase() + stake.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Trust Score Visualization */}
                  <div className="flex flex-col justify-center">
                    <div className="relative h-48 flex items-end justify-center">
                      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
                        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="currentColor" strokeWidth="0.5" className="text-[#2c2c2c] dark:text-[#e8e6e1]" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" className="text-[#2c2c2c] dark:text-[#e8e6e1]" />
                        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="0.5" className="text-[#2c2c2c] dark:text-[#e8e6e1]" />
                      </svg>
                      
                      <div className="relative w-full h-full flex flex-col justify-end">
                        <div 
                          className="w-full transition-all duration-700 ease-out relative"
                          style={{ 
                            height: `${trustScore}%`,
                            background: trustScore >= 70 
                              ? 'linear-gradient(to top, #4a5f4a, #5a7a5a)' 
                              : trustScore >= 40 
                              ? 'linear-gradient(to top, #8b7355, #a08968)'
                              : 'linear-gradient(to top, #6b4a4a, #7a5a5a)'
                          }}
                        >
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <div className="font-mono text-5xl text-[#2c2c2c] dark:text-[#e8e6e1] tracking-wider font-light">
                        {trustScore.toFixed(0)}
                      </div>
                      <div className="text-sm text-[#6b6b6b] dark:text-[#9a9a9a] mt-2 font-light tracking-wide uppercase">
                        {getTrustLabel()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#d4cfc4] dark:border-[#2a2a2a]">
                  <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light italic text-center">
                    This model illustrates how trust varies with system configuration. Adjust parameters to explore different scenarios.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">03</span>
                Context Matters: Safety vs. Creativity
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                In low-stakes creative tasks — drafting blog posts, brainstorming ideas, or generating stylistic prose — occasional errors are tolerable. But trust needs to be rethought when the model's role impacts safety, finance, law, or medicine.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Studies of LLM reliability in evaluative roles (e.g., as a judge in benchmarks or automated scoring systems) show that LLMs can correlate with human judgment in some tasks, but their consistency is not yet on par with rigorous standards.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
                  <strong>Takeaway:</strong> Trust is task-dependent. An LLM's output can be both helpful and unreliable depending on how its speed and fluency interact with the application.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">04</span>
                Mitigating the Risks
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                There are practical approaches to enhance reliability even at "Mach 5" speeds:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold text-xl">•</span>
                  <div>
                    <strong className="text-black dark:text-white">Human-in-the-loop Systems:</strong>
                    <span className="text-black/80 dark:text-white/80"> Human oversight, especially for high-stakes decisions, remains crucial.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold text-xl">•</span>
                  <div>
                    <strong className="text-black dark:text-white">Hybrid Verification:</strong>
                    <span className="text-black/80 dark:text-white/80"> Combining LLMs with rule-based checks or retrieval-augmented generation decreases the likelihood of hallucinations.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold text-xl">•</span>
                  <div>
                    <strong className="text-black dark:text-white">Transparent Confidence Indicators:</strong>
                    <span className="text-black/80 dark:text-white/80"> Future models might output uncertainty estimates alongside answers, helping users gauge reliability.</span>
                  </div>
                </li>
              </ul>

              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                Research on bias, alignment, and robust evaluation is ongoing, but no model today should be considered infallible without additional safeguards.
              </p>

              {/* Chart 3 - Trust vs Oversight Matrix */}
              <TrustOversightMatrix />

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
                <span className="text-accent-blue mr-3">05</span>
                The Future of Trust in AI
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
                At extreme speeds of operation, the core challenge is no longer <em>can an LLM be fast</em>, but <em>can an LLM be reliably trusted even while running ahead of human attention</em>. The technology's rapid progress makes it a powerful tool — but also one requiring thoughtful integration with human judgment and verification frameworks.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
                As we build AI systems that operate ever closer to "Mach 5" in decision velocity, the design of trust mechanisms — not just performance benchmarks — will define whether these systems are safe, reliable, and ultimately beneficial.
              </p>

              <div className="bg-gradient-to-r from-accent-blue/10 to-purple-500/10 border border-accent-blue/30 rounded-xl p-6 my-8">
                <p className="text-base md:text-lg leading-relaxed text-black/90 dark:text-white/90 italic">
                  "The question isn't whether AI can outpace us — it's whether we can build systems that remain trustworthy even when they do."
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

export default BlogPost1
