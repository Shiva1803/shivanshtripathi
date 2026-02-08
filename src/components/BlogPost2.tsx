import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TrainingEnergyCostChart } from './charts/TrainingEnergyCostChart'
import { EnergyEfficiencyChart } from './charts/EnergyEfficiencyChart'

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
    <div className="min-h-screen bg-white dark:bg-bg-dark text-black dark:text-white transition-colors duration-300 pt-0">
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
                From biological neurons to data centers: the universal cost of computation
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
              The Energy Cost of Intelligence: From Ant Colonies to Data Centers
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Published: December 2025
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              In July 2020, researchers at OpenAI finished training GPT-3. The model had 175 billion parameters and had processed 300 billion tokens of text. The total energy cost: approximately 1,287 megawatt-hours. For context, that's enough electricity to power a typical American household for 120 years, or to charge an iPhone every night for 120,000 years.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Three years later, GPT-4's training run likely consumed several times that amount, though OpenAI hasn't released the exact figures. The trend is clear and troubling: as AI models grow more capable, their energy demands increase faster than their size. We're on a collision course between the promise of artificial intelligence and the physics of power consumption.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Meanwhile, the three-pound organ reading these words right now runs on roughly 20 watts. That's less power than a dim LED bulb. Your brain contains 86 billion neurons, performs an estimated 10^15 operations per second, stores a lifetime of memories, and generates consciousness. All on the equivalent of a laptop charger.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Something doesn't add up.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Brain's Unfair Advantage
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Neuroscientist Karl Friston once calculated that if we built a computer that matched the brain's raw computational capacity using current digital technology, it would require approximately 10 megawatts of power and a cooling system the size of a factory. The brain achieves the same capability in a space smaller than a cantaloupe, at body temperature, using less power than a refrigerator light.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The efficiency comes from architectural choices refined over 500 million years of evolution. Neurons don't operate on clock cycles. They fire only when needed, using electrochemical gradients that are remarkably energy-efficient. When a neuron isn't actively signaling, it consumes almost no power. Digital circuits, by contrast, leak current continuously just to maintain their state.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              More fundamentally, the brain doesn't separate memory from processing. A synapse isn't just a connection; it's storage, computation, and communication in one physical structure. When you learn something, you're physically changing the strength of connections, not moving data from storage to a separate processor. There's no energy wasted shuttling information back and forth.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Modern computers do the opposite. The CPU and RAM are separate components connected by buses that consume power every time they move data. This <em>"von Neumann bottleneck"</em> isn't just a performance limitation; it's an energy disaster. Studies suggest that moving data between memory and processor consumes more energy than the actual computation.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              And there's one more trick: analog computation. Your neurons encode information in spike timing, frequency, and amplitude (continuous variables that carry multiple bits of information per spike). Digital computers reduce everything to binary, then compensate with billions of operations per second. It's like using only two paint colors but applying them really, really fast to approximate all other colors.
            </p>

            {/* Brain fMRI Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/brain.webp" 
                alt="fMRI scan of brain showing neural activity" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                A fMRI scan of brain showing neural activity
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              When Simple Beats Complex
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              An Argentine ant weighs roughly two milligrams. Its brain contains maybe 250,000 neurons and consumes an estimated 0.00001 watts of power. Individual ants are, by any measure, stupid. They can't learn complex tasks, can't recognize their own reflection, can't even find food efficiently alone.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              But put 40,000 of them together and something remarkable happens. The colony finds optimal paths between food sources and the nest, using an algorithm that computer scientists later formalized as <em>"ant colony optimization."</em> They maintain consistent tunnel temperatures within a fraction of a degree despite external fluctuations. They allocate workers to different tasks dynamically based on colony needs. They wage coordinated warfare against rival colonies.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The total energy budget for that 40,000-ant superorganism: roughly 0.4 watts. Less than a wireless mouse.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Deborah Gordon at Stanford has spent decades studying harvester ant colonies. Her work suggests that colony intelligence emerges from simple local rules. Individual ants respond to chemical gradients and contact rates with other ants. No central planning. No master controller. Just distributed interaction creating complex collective behavior.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This has direct implications for AI. Google's data centers use ant colony algorithms to route network traffic. Amazon's warehouse robots coordinate using principles derived from ant foraging. The U.S. military has tested swarm drone systems based on ant warfare strategies. In each case, simple distributed agents produce sophisticated collective outcomes, and do it efficiently.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Real Cost of Scale
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              When Microsoft and OpenAI began training what would become GPT-4 in 2022, they used Azure's AI supercomputer: thousands of NVIDIA A100 GPUs running in parallel. Each A100 GPU consumes roughly 400 watts at full load. The training run took months.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The exact numbers remain proprietary, but researchers at the University of Massachusetts Amherst estimated that training large language models at GPT-4's scale could consume 10-15 gigawatt-hours of electricity. That's the same amount used by approximately 1,000 American homes for an entire year. The associated carbon emissions: roughly 1,500 tons of CO₂.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              And that's just training. Once trained, these models still need to run inference (actually answering queries). Each ChatGPT query is estimated to consume 0.3 watt-hours, about 10 times more than a Google search. With millions of queries daily, the operating cost quickly exceeds the training cost.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Sam Altman, OpenAI's CEO, has acknowledged this openly: <em>"The compute requirements are so large that the energy constraints are becoming the binding constraint on AI progress."</em> In other words, we may not run out of algorithmic ideas; we might run out of affordable electricity first.
            </p>

            {/* Training Energy Cost Chart */}
            <TrainingEnergyCostChart />

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              Why Digital Brains Burn So Hot
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The fundamental problem is that transistors are terrible at pretending to be neurons.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              A transistor is a switch. It's either on or off. To make it change state, you have to move electrons through semiconductor material, and that creates heat. Modern processors have billions of transistors switching billions of times per second. Even at nanometer scales, even with the best efficiency improvements Intel or TSMC can achieve, that adds up to enormous power consumption.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The NVIDIA H100 GPU (designed specifically for AI workloads) has 80 billion transistors, runs at clock speeds exceeding 1 GHz, and consumes 700 watts. It's an engineering marvel, packing incredible computational density. But compared to biological systems, it's absurdly inefficient.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Part of the problem is digital precision. A GPU performs calculations in 32-bit or 16-bit floating point (massive overkill for many AI tasks). Biological neurons work with much noisier signals and still function fine. Recent research shows that many neural networks can run at 8-bit or even 4-bit precision without significant accuracy loss, but we still train them at full precision because it's how our hardware naturally works.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              There's also the cooling problem. Concentrate that much power in a small space and temperatures skyrocket. Modern data centers spend roughly 40% of their total energy budget just on cooling (running massive HVAC systems to prevent servers from literally melting). Google's data centers achieve Power Usage Effectiveness (PUE) ratios around 1.1, meaning for every watt of computing power, they spend an extra 0.1 watts on cooling. That's world-class efficiency. Many data centers have PUE ratios closer to 2.0.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Your brain, meanwhile, maintains a constant 37°C through passive blood flow. No fans. No refrigeration. No energy penalty for temperature management.
            </p>

            {/* Energy Efficiency Chart */}
            <EnergyEfficiencyChart />

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Data Center Problem Nobody Talks About
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Global data centers consumed approximately 460 terawatt-hours in 2022 (roughly 2% of worldwide electricity generation). That's more than the entire United Kingdom uses annually. By 2030, estimates suggest this could reach 8%, driven primarily by AI and cryptocurrency.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              But the averages hide enormous variation. Training runs for cutting-edge models happen in specialized facilities with power draws that can stress regional electrical grids. When Meta built its AI Research SuperCluster in 2022, they needed a dedicated substation just to supply it with power.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The geography of AI is becoming the geography of cheap electricity. Why are so many AI companies building data centers in Iceland, Norway, and the Pacific Northwest? Hydroelectric power. Why is China building massive GPU clusters in Guizhou province? Abundant coal power, as much as environmental advocates hate to admit it.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This creates a perverse incentive: the countries with the cheapest electricity (often because they burn the dirtiest fuel) attract the most AI development. The computation happens where power is abundant, even if that power comes from coal plants.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Iceland is a rare exception: abundant geothermal and hydroelectric power with minimal carbon emissions. But there's only one Iceland, and it has a population of 380,000. It can't host the world's AI infrastructure.
            </p>

            {/* Data Center Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/facebook_Data_center.webp" 
                alt="Facebook Data Center" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                Facebook's Datacenter in Lulea, Sweden
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              What Actually Works
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              In 2014, IBM unveiled TrueNorth: a neuromorphic chip with 1 million neurons and 256 million synapses. It consumed 70 milliwatts during operation (roughly 1/10,000th the power of a conventional processor performing equivalent tasks). The architecture was radically different: event-driven, asynchronous, with memory and processing co-located. It worked more like a brain than a computer.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              TrueNorth didn't revolutionize computing. It couldn't run standard software. It was hard to program. It excelled at specific pattern recognition tasks but couldn't handle general-purpose computing. The chip proved a point, though: different architectures can achieve dramatic efficiency gains for certain workloads.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Intel's Loihi 2, released in 2021, took the concept further. It demonstrated energy efficiency improvements of 1,000x for certain neural network tasks compared to conventional GPUs. The chip uses spiking neural networks (neurons that communicate through discrete events rather than continuous values) drastically reducing power consumption.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              But we're still years away from neuromorphic chips handling large language models or image generation. The software ecosystem isn't there. The programming paradigms are unfamiliar. And most critically, neuromorphic architectures excel at inference but struggle with the training process that makes modern AI possible.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Shorter-term solutions are more modest. Quantization (reducing numerical precision from 32-bit to 8-bit or lower) can cut energy use by 75% with minimal accuracy loss. Pruning (removing redundant connections from trained networks) achieves similar savings. Mixture-of-experts architectures activate only relevant parts of large models for each query, avoiding wasted computation.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Google's PaLM model used these techniques to reduce energy consumption by 60% compared to naive scaling. Meta's LLaMA models are explicitly designed for efficiency, achieving GPT-3-level performance at a fraction of the computational cost. The efficiency race is happening, driven by the simple economic reality that electricity costs money.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Arithmetic Doesn't Lie
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Let's do the math. A human brain: 20 watts. Global human population: 8 billion. Total energy cost of human biological intelligence: 160 gigawatts continuously.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Now consider artificial intelligence. Training GPT-4 likely consumed 15-20 gigawatt-hours in a few months. That's equivalent to the continuous brain power of roughly 100,000 humans for the same period, just for one training run of one model.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              And that model, once trained, serves hundreds of millions of users. The per-query cost seems small, but it adds up. If every Google search were replaced by a ChatGPT-style query consuming 10x more energy, the additional global energy demand would be staggering.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              We're not replacing human intelligence; we're augmenting it. The question is whether we can afford to augment it at scale with current technology.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Researchers at MIT calculated that if AI adoption continues at current rates, and if efficiency improvements don't accelerate, AI could consume 15-20% of global electricity by 2040. That's not a prediction; it's a warning. The trajectory is unsustainable without major architectural changes.
            </p>

            {/* Power Plant Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/powerplant.jpg" 
                alt="Power generation infrastructure" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                By 2040, AI could consume 15-20% of global electricity, requiring massive expansion of power generation infrastructure to meet demand that didn't exist a decade ago
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              Where This Goes
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The path forward splits into two possibilities.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              <strong>First option:</strong> revolutionary hardware. Neuromorphic chips that truly mimic biological computation. Photonic processors that use light instead of electrons. Quantum computers for specific AI tasks. Analog computing making a comeback. Any of these could shift the energy equation dramatically.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The challenge is that each requires abandoning decades of software infrastructure built around digital von Neumann architectures. It's not just new hardware; it's new programming languages, new algorithms, new ways of thinking about computation. The transition costs are enormous.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              <strong>Second option:</strong> incremental optimization. Better GPUs. Smarter algorithms. More efficient data centers. Hybrid precision training. Model compression. Distillation. Every percentage point of efficiency improvement matters when multiplied across millions of servers.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This is more realistic near-term but offers diminishing returns. We might achieve 10x improvements through optimization. We need 1000x improvements to match biological efficiency.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The actual future is probably some combination. Gradual hardware evolution toward more brain-like architectures, while software adapts incrementally. Specialized neuromorphic chips handling specific tasks while general-purpose processors handle others. Heterogeneous computing where each component does what it does best.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              But one thing is certain: we can't scale AI indefinitely on current architectures without confronting the energy cost. Intelligence isn't free. Evolution spent billions of years optimizing the brain's energy budget. We're trying to do it in decades.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The question isn't whether artificial intelligence is possible (we've already built it). The question is whether we can build it sustainably, or whether the energy cost will become the limiting factor long before we reach AGI.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The human brain still represents the most energy-efficient thinking machine we know of. Until we match it, every advance in AI carries an invisible price tag measured in kilowatt-hours and carbon emissions. The smarter our machines become, the more urgently we need to make them efficient.
            </p>

            <div className="bg-gradient-to-r from-accent-blue/10 to-purple-500/10 border border-accent-blue/30 rounded-xl p-6 my-8">
              <p className="text-base md:text-lg leading-relaxed text-black/90 dark:text-white/90 italic">
                "Intelligence isn't free. Evolution spent billions of years optimizing the brain's energy budget. We're trying to do it in decades."
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
