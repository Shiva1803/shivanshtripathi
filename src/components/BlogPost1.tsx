import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VerificationTimeChart from './charts/VerificationTimeChart'

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
              Can an LLM Be Trusted at Mach 5?
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Published: February 6, 2026
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              On November 13, 2023, Air Canada's chatbot told a customer named Jake Moffatt that he could get a refund for his flight after he'd already bought it. Moffatt was flying to his grandmother's funeral and asked about bereavement fares. The chatbot said he could buy the ticket now and apply for the discount later. He did. Air Canada refused to pay him back, saying the chatbot was a "separate legal entity" responsible for its own mistakes. A small claims court in British Columbia said that was ridiculous and ordered the airline to pay up. The chatbot had made up a policy that didn't exist.
            </p>

            {/* Airline Check-in Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/image copy 2.png" 
                alt="Airline check-in area" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                Air Canada's chatbot invented a bereavement fare policy that didn't exist. The airline argued the bot was a 'separate legal entity.' A tribunal disagreed.
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              This gets at the main problem with AI working at what we'll call "Mach 5": not actual supersonic speed, but making decisions faster than humans can check them. The chatbot answered instantly. Moffatt believed it. Nobody at Air Canada looked at what happened until it was too late. The system ran faster than anyone could watch it, and when it screwed up, nobody caught it.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The problem isn't that AI makes mistakes. People make mistakes all the time. The problem is that AI makes mistakes at massive scale, sounds confident while doing it, and speaks so smoothly that it seems trustworthy even when it's completely wrong. And as these systems get faster and spread everywhere, the gap between how fast they work and how fast we can check their work keeps growing.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Problem That Won't Go Away
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Large language models work by predicting what word should come next based on patterns they've seen in their training data. They don't actually know facts: they know what usually follows what. When GPT-4 tells you the Eiffel Tower is 330 meters tall, it's not pulling up a fact from memory. It's guessing that "330 meters" is what usually comes after "the Eiffel Tower is" based on seeing millions of examples.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This works great for common knowledge. It fails randomly for everything else.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Research shows that these AI models will agree with you even when you're wrong. OpenAI's own tests found GPT-4 made stuff up in about 15-20% of answers, depending on what you asked. That's better than earlier versions, but it's not zero. And here's the scary part: when it's wrong, it sounds just as confident as when it's right.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Arvind Narayanan at Princeton found cases where ChatGPT invented entire legal cases: complete with case names, court details, and rulings: that never happened. Lawyers used these fake cases in real court filings. Judges punished them for it. The lawyers said they trusted ChatGPT and didn't check. The AI had spit out convincing legal text faster than anyone could verify it was real.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Here's what makes this worse: bigger, better AI models don't just make fewer mistakes: they make more convincing mistakes. GPT-3 might give you obviously wrong answers. GPT-4 gives you wrong answers that sound right, include sources, and seem well-reasoned.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              When you can't tell the difference between real information and made-up information without checking everything yourself, and the AI spits out answers faster than you can check them, you've got a serious trust problem.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Speed Problem
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              In December 2024, Microsoft gave millions of workers access to Copilot in Office 365. Employees started using it to write emails, summarize documents, and create reports. Most people don't carefully check what AI writes: they skim it, make small edits, and hit send.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This is "Mach 5" in action. An AI reads a 50-page technical document and writes a three-paragraph summary in two seconds. Reading that summary takes 20 seconds. Actually checking it against the original document takes 20 minutes. Most people take the shortcut.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              If the summary has a mistake: getting a detail wrong, flipping a conclusion, or leaving out something important: that mistake spreads. It gets copied into emails. Those emails affect decisions. The decisions pile up. By the time someone notices, dozens of people have acted on bad information.
            </p>

            {/* Verification Time Chart */}
            <VerificationTimeChart />

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Stanford researchers studied this with doctors. When doctors used AI suggestions for diagnoses, they spent about 30 seconds reviewing each one before saying yes or no. When the AI was wrong, doctors caught it only 65% of the time. When the AI was confidently wrong: giving incorrect diagnoses with high confidence scores: doctors caught it only 40% of the time.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The doctors weren't bad at their jobs. They were overwhelmed. The AI made suggestions faster than they could carefully check them. The pressure to see more patients and get through more cases meant trusting the AI even when they probably shouldn't.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              When Fast Becomes Too Fast
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The real question isn't whether AI is useful. It obviously is. GitHub says people using Copilot finish coding tasks 55% faster. Customer service chatbots handle basic questions that would otherwise eat up staff time. AI writing tools help people communicate better.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The question is whether the speed is worth the risk when things are moving too fast to check. And that depends entirely on what happens when it goes wrong.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              For creative writing, travel tips, or brainstorming, mistakes are annoying but harmless. You might waste time going to a restaurant that doesn't exist, but nobody gets hurt.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              For medical diagnosis, legal advice, financial decisions, or safety systems, it's completely different. A wrong drug interaction could kill someone. A fake legal case could put an innocent person in jail. A bad financial prediction could bankrupt a company.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              We're using the same technology: models that make stuff up at known rates and work faster than humans can check: for both low-risk and high-risk stuff. The technology doesn't know the difference. The risk is the same. Only what happens when it fails is different.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              Building Systems You Can Actually Trust
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Some companies are doing this better. Claude now shows you where it got its information so you can check it. Google's medical AI flags answers it's not sure about. ChatGPT shows its work when writing code so you can see what it's doing.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              These are steps toward AI you can verify: systems designed to let you check their work without spending hours on it. But showing your work doesn't help if nobody actually checks.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The real fix is changing how we use AI. AI outputs shouldn't go straight to users: they should go through review systems. Important decisions need human checking, not as something optional but as a required step. Speed gains should be measured after accounting for checking time, not before.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Some fields already do this. Airplane autopilots work faster than humans can react, but critical systems have backups, automatic cross-checks, and humans making final calls. Nuclear plants use AI for monitoring, but humans make shutdown decisions. The systems run fast, but trust is built through layers of checking.
            </p>

            {/* Aviation Cockpit Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/image copy 3.png" 
                alt="Aviation cockpit showing human-AI collaboration" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                Critical systems like aviation combine AI speed with mandatory human oversight—a model other industries have yet to adopt.
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Software development is starting to get this. The best AI coding tools don't just write code: they explain it, test it, and fit into review processes. The speed boost comes from cutting out boring work, not from skipping oversight.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Other fields haven't caught up. Customer service uses chatbots with barely any supervision. Healthcare tries out AI diagnosis without enough testing. Legal tech companies sell AI research tools without proper warnings about fake information.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The pattern is always the same: launch first, deal with trust problems later. It works until it doesn't.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <div className="bg-gradient-to-r from-accent-blue/10 to-purple-500/10 border border-accent-blue/30 rounded-xl p-6 my-8">
              <p className="text-base md:text-lg leading-relaxed text-black/90 dark:text-white/90 italic">
                AI will keep getting faster. The question is whether we build trust systems that keep up with that speed, or whether we just go for maximum velocity until something really bad happens. Air Canada's chatbot mistake cost them a few hundred dollars in court. The next failure might cost a lot more. Speed without checking isn't efficiency: it's risk we're ignoring until we can't anymore.
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
