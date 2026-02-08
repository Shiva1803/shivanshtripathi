import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FighterProductionChart } from './charts/FighterProductionChart'
import { OperationalRangeChart } from './charts/OperationalRangeChart'

const BlogPost3: React.FC = () => {
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
                src="/SovietAerospace.png" 
                alt="Soviet aerospace engineering" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                The Antonov An-225 "Mriya" (Dream) aircraft transporting the Soviet Buran space shuttle orbiter.
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
              Soviet Aerospace: Brutal yet Beautiful
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Published: January 13, 2026
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The MiG-25 wasn't supposed to work. Western intelligence couldn't believe the specifications when they first got hold of them in the early 1970s. An interceptor capable of Mach 3.2, built primarily from nickel steel alloys rather than titanium. Steel. The same material used in bridges and construction equipment, now expected to withstand temperatures exceeding 300°C at sustained supersonic flight.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The reason was simple: the Soviet Union couldn't produce titanium at scale. Their welding techniques for titanium were inconsistent, and what little titanium they had went to submarine hulls. So Pavel Sukhoi's design bureau did what Soviet engineers always did: they solved the problem with what they had. They used steel, accepted the weight penalty (the MiG-25 weighed 20 tons empty, nearly double the F-15), and compensated with two massive Tumansky R-15 engines producing 11,200 kgf of thrust each. The aircraft burned fuel so fast that pilots joked it had "the range of a bullet."
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              When Soviet pilot Viktor Belenko defected to Japan in 1976 with his MiG-25, American engineers who examined it were initially dismissive. The welds looked crude. The rivets were uneven. The avionics used vacuum tubes instead of solid-state electronics. Then they tested it. The vacuum tubes, it turned out, were resistant to electromagnetic pulse. The crude welding was faster to repair in field conditions. The massive steel airframe could take damage that would tear apart a lighter aircraft. What looked like technological backwardness was actually brutal practicality.
            </p>

            {/* Belenko's MiG-25 Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/victor's mig-25.jpg" 
                alt="Viktor Belenko's MiG-25 at Hakodate" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                Viktor Belenko's MiG-25 at Hakodate, Japan (1976)
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              When Scarcity Shapes Design
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Soviet aerospace developed under constraints that Western engineers rarely faced. Alexei Tupolev, son of the legendary Andrei Tupolev, once described their design process: <em>"We didn't have the luxury of starting with the ideal and working backwards. We started with what existed in Soviet factories and worked forwards."</em>
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              This showed up in unexpected places. The Tu-95 Bear bomber, introduced in 1956, used turboprop engines when everyone else was moving to pure jets. Why? Fuel efficiency. The Soviet Union needed a bomber that could reach North America and return without refueling, as their in-flight refueling capabilities were limited. Turboprops consumed roughly half the fuel of comparable jets at cruise speed. The contra-rotating propellers (eight blades total per engine, spinning in opposite directions) were mechanically complex but thermodynamically efficient. They also generated a distinctive low-frequency rumble that NATO submarines could detect underwater from over 150 kilometers away.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The Tu-95 is still flying combat missions in 2025. The B-52, its American contemporary, is too, but the B-52 had the benefit of nearly unlimited development funding and access to advanced materials. The Tu-95 succeeded despite having neither.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              Operational Reality Over Theoretical Performance
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Western aircraft were designed for prepared airbases with smooth runways, climate-controlled hangars, and specialized support equipment. Soviet aircraft were designed for war.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The Sukhoi Su-25 Frogfoot ground-attack aircraft had a titanium bathtub around the cockpit weighing 1,100 kg. The landing gear was reinforced to handle unprepared dirt and grass strips. The engines were positioned high on the fuselage to reduce foreign object ingestion. Engine intake covers were standard equipment because Soviet pilots expected to operate from forward positions where debris was inevitable.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              During the Soviet-Afghan War (1979-1989), Su-25s routinely returned to base with battle damage that would have downed most Western aircraft. There are documented cases of Su-25s landing safely with one engine destroyed, hydraulic lines severed, and over 80 hits from ground fire. The aircraft's survivability came from redundancy: dual hydraulic systems, mechanical cable backups, and an armored cockpit that could stop 23mm cannon rounds.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This wasn't elegant engineering. It was 200 extra kilograms of armor, backup systems that added complexity, and performance sacrificed for survivability. But it worked. Soviet ground commanders trusted the Su-25 in a way they never trusted earlier ground-attack aircraft.
            </p>

            {/* Su-25 Afghanistan Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/su25afghanistan.jpg" 
                alt="Su-25 Attack Aircraft in Afghanistan" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                Su-25 Attack Aircraft in Afghanistan (1980s)
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The MiG-21: Philosophy in Aluminum
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              If one aircraft encapsulates Soviet design philosophy, it's the MiG-21. First flown in 1955, over 11,000 were eventually built, more than any other supersonic aircraft in history.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The MiG-21 was designed around a simple premise: put the smallest possible airframe around the largest possible engine. The result was a fighter that was essentially a flying engine with a pilot strapped on top. It had a combat radius of barely 370 kilometers with standard fuel, absurdly short by Western standards. It carried limited avionics and only four hardpoints for weapons.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              But it was cheap. A MiG-21 cost roughly one-third of what an F-4 Phantom cost. It could be maintained by conscript mechanics using basic tools. The engine could be swapped out in under two hours by a field crew. And in close-range combat, below 10,000 meters, it was terrifyingly effective.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Soviet doctrine didn't need long-range fighters for deep penetration missions. They needed point defense interceptors to protect Soviet airspace and numerical superiority to overwhelm NATO forces. The MiG-21 delivered both. Over 60 countries operated it. Some still do.
            </p>

            {/* Fighter Production Chart */}
            <FighterProductionChart />

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              Buran: The Shuttle That Flew Itself
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              When NASA's Space Shuttle Columbia first launched in 1981, the Soviet response was inevitable. The Buran program was approved within months.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              But Soviet engineers made different choices. NASA's shuttle used its main engines throughout ascent; they were the most powerful part of the system. Buran's main engines were on the Energia booster rocket, not the orbiter itself. This made Buran significantly lighter and gave the Energia rocket independent utility for other payloads.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              More significantly, Buran was designed for fully autonomous operation from the start. NASA's shuttle could theoretically land autonomously, but the software was never trusted for operational use. Buran's only flight, on November 15, 1988, was completely unmanned. The orbiter launched, orbited twice, and landed automatically in 17-meter-per-second crosswinds at Baikonur Cosmodrome. The landing was so precise that the main gear touched down within 10 meters of the targeted point.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Why the difference? The Soviet space program had experience with automated systems. Their Soyuz spacecraft had been docking automatically since 1967. And there was a darker reason: Soviet leadership wanted a military orbital platform that could operate without risking trained cosmonauts on every mission.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Buran flew once. The program collapsed with the Soviet Union in 1991. The orbiter that flew that perfect autonomous landing was destroyed in 2002 when the hangar storing it collapsed. Only one flight, but it proved something the Americans never attempted operationally.
            </p>

            {/* Buran Shuttle Image */}
            <div className="my-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/buranshuttle.webp" 
                alt="Buran on the Energia rocket at Baikonur" 
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center italic">
                Buran on the Energia rocket at Baikonur (1988)
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              What the Rivets Tell You
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Walk up close to a preserved Soviet aircraft and you'll notice the rivets. They're larger than on Western aircraft. More visible. Sometimes uneven in spacing.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              This wasn't carelessness. Soviet manufacturing prioritized repairability over initial precision. Larger rivets were easier to drill out and replace in field conditions. The holes could be re-used multiple times with oversized rivets if needed. Panels were designed to be patched rather than replaced entirely.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              The canopy on early MiG fighters was secured with external bolts rather than flush-mounted fasteners. It added drag. It looked crude. But a mechanic could remove the canopy with a basic wrench in minutes, rather than needing specialized tools.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This philosophy extended to everything. Soviet ejection seats used pyrotechnic charges rather than rocket motors: simpler, more reliable, easier to maintain. Landing gear used basic hydraulic systems with mechanical backups rather than complex computer-controlled variants. When avionics failed, pilots could fly on backup instruments that were purely mechanical.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The aesthetic wasn't brutal by choice. It was brutal by necessity. But there's honesty in that approach. Every rivet, every exposed panel, every mechanical linkage visible from the outside tells you exactly what the machine is. No fairings hiding complexity. No smooth surfaces concealing fragility. Just metal and purpose.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Designer's Dilemma
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Artem Mikoyan and Mikhail Gurevich (the MiG in MiG) worked under Stalin, Khrushchev, and Brezhnev. One bad aircraft could mean career destruction, or worse. When the MiG-23 swing-wing fighter proved problematic (high accident rate, difficult handling), the design bureau couldn't simply abandon it. Instead, they iterated rapidly, producing variants that addressed specific issues until the aircraft became acceptable.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              This created a different relationship between designers and products. Western aerospace companies could afford clean-sheet designs with each generation. Soviet design bureaus iterated endlessly on proven airframes. The MiG-21 spawned over 30 variants. The Su-27 family is still being developed today, nearly 50 years after the original first flew.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              Pavel Sukhoi died in 1975. His design bureau continues to bear his name and design philosophy. That continuity of design language, operational philosophy, and engineering approach is rare in aerospace. It created a consistency of aesthetic and purpose that's immediately recognizable.
            </p>

            {/* Operational Range Chart */}
            <OperationalRangeChart />

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              Why It Still Resonates
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Modern aerospace has mostly moved past these constraints. Advanced materials are globally available. Manufacturing precision is achievable anywhere with the right equipment. But something was lost in that transition.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Contemporary aircraft are optimized to the point of fragility. The F-22's stealth coating requires climate-controlled hangars and specialized maintenance. Modern commercial jets have such tight engineering tolerances that volcanic ash can destroy engines. We've gained performance and lost robustness.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The Soviet approach (building for the worst conditions, accepting weight penalties for redundancy, prioritizing repairability) is worth remembering. Not because we should build crude aircraft, but because the philosophy of designing for actual operational conditions rather than ideal test conditions remains valid.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              SpaceX's Starship uses stainless steel construction when advanced composites are available. The decision echoes Sukhoi's choice with the MiG-25: use the material that works for your manufacturing capabilities and operational requirements, not the material that looks most advanced on paper. Starship's exposed welds and industrial appearance aren't retro aesthetic choices; they're the visible result of optimizing for rapid production and repairability.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
              The Aesthetic of Constraint
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              Soviet aerospace wasn't designed to be beautiful. The engineers who created these aircraft were solving immediate, concrete problems with limited resources under political pressure. They didn't have time for aesthetics.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              But constraints breed creativity in unexpected ways. The visual language that emerged (exposed structure, visible fasteners, raw metal, angular forms) came from the same place as Brutalist architecture. Not as a style, but as the inevitable result of pure function.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-black/80 dark:text-white/80">
              There's a reason these aircraft still appear in films and games when directors want to convey industrial power or raw capability. The MiG-29's dirt-simple intake covers that slam shut on takeoff to prevent FOD ingestion. The Su-27's massive twin engines canted outward for better survivability. The Mi-24 Hind attack helicopter that looks like a flying tank because it essentially is.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              These machines tell the truth about what they are. Every line, every surface, every component is there because it must be. That's not just functional. In its own harsh way, it's beautiful.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-black/80 dark:text-white/80">
              The Soviet aerospace industry ceased to exist in 1991, but over 15,000 Soviet-designed aircraft remain in service worldwide. They're still flying for the same reason they flew then: they work.
            </p>

            <div className="bg-gradient-to-r from-red-500/10 to-gray-500/10 border border-red-500/30 rounded-xl p-6 my-8">
              <p className="text-base md:text-lg leading-relaxed text-black/90 dark:text-white/90 italic">
                "We didn't have the luxury of starting with the ideal and working backwards. We started with what existed in Soviet factories and worked forwards." &mdash; Alexei Tupolev
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
