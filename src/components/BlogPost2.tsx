import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EnergyComparisonChart } from './charts/EnergyComparisonChart'
import { EfficiencyScalingChart } from './charts/EfficiencyScalingChart'

const BlogPost2: React.FC = () => {
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
      <div className="sticky top-4 z-40 mb-8">
        <header className="flex justify-between items-center bg-black/5 dark:bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-300 max-w-4xl mx-4 sm:mx-6 lg:mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/rainmeter2.png"
              alt="Rain Control"
              onClick={handleRainClick}
              className="h-7 sm:h-8 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] dark:hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer"
              title={`Rain Intensity: ${rainIntensity === 150 ? 'Light' : rainIntensity === 250 ? 'Medium' : rainIntensity === 350 ? 'Heavy' : 'Storm'}`}
            />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white logo-glow-text whitespace-nowrap" onClick={handleLogoClick}>shivansh</div>
          </div>
          <Link to="/blogs" className="text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors text-sm sm:text-base whitespace-nowrap">
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
                src="/pexels-pixabay-46169.jpg" 
                alt="Energy and intelligence concept" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                From biological neurons to data centers — the universal cost of computation
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
              The Energy Cost of Intelligence: From Ant Colonies to Data Centers
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Published: October 2024
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Intelligence, whether biological or artificial, comes with an energy price tag. A human brain runs on roughly 20 watts — about the same as a dim light bulb. An ant colony of a thousand individuals collectively uses less power than a smartphone charger. Yet training a single large language model can consume megawatts, equivalent to the power needs of a small town.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This disparity raises fundamental questions: Why is artificial intelligence so energy-hungry? What can we learn from biological systems? And as AI scales, can we afford the energy cost?
            </p>

            {/* Chart 1 */}
            <EnergyComparisonChart />

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
              <span className="text-accent-blue mr-3">01</span>
              Biological Intelligence: Efficiency Through Evolution
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The human brain is a masterclass in energy efficiency. With approximately 86 billion neurons, it performs trillions of operations per second while consuming just 20 watts. This efficiency comes from billions of years of evolutionary optimization.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Biological neurons operate on electrochemical signals that are inherently low-power. They're also highly parallel — millions of neurons can fire simultaneously without a central clock. Information is stored in synaptic weights that don't require constant refreshing, unlike computer memory.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6 rounded-r-lg">
              <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
                <strong>Key Insight:</strong> Biological systems achieve efficiency through massive parallelism, event-driven computation, and co-location of memory and processing.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
              Collective Intelligence: The Ant Colony
            </h3>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Individual ants are simple creatures with tiny brains consuming microwatts of power. Yet ant colonies exhibit remarkable collective intelligence — building complex structures, farming fungi, and waging coordinated warfare. A colony of 1,000 ants uses less energy than a single human neuron, yet solves optimization problems that challenge modern computers.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              This demonstrates that intelligence doesn't always require high individual complexity. Distributed, simple agents following local rules can produce sophisticated global behavior — a principle that inspired swarm intelligence algorithms in AI.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
              <span className="text-accent-blue mr-3">02</span>
              Artificial Intelligence: The Power Paradox
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Modern AI systems are energy-intensive by comparison. Training GPT-3 reportedly consumed 1,287 MWh of electricity — enough to power an average American home for 120 years. Even inference (running a trained model) can require hundreds of watts per query.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Why the difference? Current AI relies on digital computers with fundamentally different architectures than brains. Transistors switch billions of times per second, consuming power with each transition. Memory and processing are separated, requiring constant data movement. And unlike neurons, digital circuits must maintain their state continuously, even when idle.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6 rounded-r-lg">
              <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
                <strong>Challenge:</strong> As AI models grow larger, their energy demands scale superlinearly — doubling model size can more than double energy consumption.
              </p>
            </div>

            {/* Chart 2 */}
            <EfficiencyScalingChart />

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
              <span className="text-accent-blue mr-3">03</span>
              The Data Center Reality
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              AI doesn't run in isolation — it requires massive data centers. These facilities consume 1-2% of global electricity, a figure projected to reach 8% by 2030 as AI adoption accelerates. Cooling alone accounts for 40% of data center energy use.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The environmental impact is substantial. Training a single large model can emit as much CO₂ as five cars over their lifetimes. As AI becomes ubiquitous — powering search, recommendations, autonomous vehicles, and more — the cumulative energy cost becomes a sustainability concern.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
              <span className="text-accent-blue mr-3">04</span>
              Paths to Efficiency
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The AI community is actively pursuing energy efficiency through multiple approaches:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-accent-blue font-bold text-xl">•</span>
                <div>
                  <strong className="text-black dark:text-white">Neuromorphic Computing:</strong>
                  <span className="text-black/80 dark:text-white/80"> Chips that mimic brain architecture, using spiking neurons and event-driven processing. Intel's Loihi and IBM's TrueNorth demonstrate 1000x energy improvements for certain tasks.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent-blue font-bold text-xl">•</span>
                <div>
                  <strong className="text-black dark:text-white">Model Compression:</strong>
                  <span className="text-black/80 dark:text-white/80"> Techniques like pruning, quantization, and distillation reduce model size and energy needs without sacrificing much performance.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent-blue font-bold text-xl">•</span>
                <div>
                  <strong className="text-black dark:text-white">Specialized Hardware:</strong>
                  <span className="text-black/80 dark:text-white/80"> TPUs, GPUs, and custom AI accelerators optimize for specific operations, achieving better performance-per-watt than general-purpose CPUs.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent-blue font-bold text-xl">•</span>
                <div>
                  <strong className="text-black dark:text-white">Algorithmic Innovation:</strong>
                  <span className="text-black/80 dark:text-white/80"> Sparse models, mixture-of-experts, and efficient attention mechanisms reduce computational requirements.</span>
                </div>
              </li>
            </ul>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white">
              <span className="text-accent-blue mr-3">05</span>
              The Future: Sustainable Intelligence
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              As AI capabilities grow, so must our commitment to energy efficiency. The goal isn't to match biological efficiency exactly — that may be impossible with current technology — but to close the gap significantly.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The path forward likely involves hybrid approaches: combining the best of biological inspiration (parallelism, sparsity, event-driven processing) with the advantages of digital systems (precision, speed, scalability). The question isn't whether we can build intelligent systems, but whether we can build them sustainably.
            </p>

            <div className="bg-gradient-to-r from-accent-blue/10 to-purple-500/10 border border-accent-blue/30 rounded-xl p-6 my-8">
              <p className="text-base md:text-lg leading-relaxed text-black/90 dark:text-white/90 italic">
                "Intelligence is not free — it requires energy. The challenge of our time is to make that cost sustainable."
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

export default BlogPost2
