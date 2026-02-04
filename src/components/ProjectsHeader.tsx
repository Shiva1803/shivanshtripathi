import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProjectsHeader = () => {
    const [rainIntensity, setRainIntensity] = useState(150)
    const intensityLevels = [150, 250, 350, 450]
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleRainClick = () => {
        const currentIndex = intensityLevels.indexOf(rainIntensity)
        const nextIndex = (currentIndex + 1) % intensityLevels.length
        const newIntensity = intensityLevels[nextIndex]
        setRainIntensity(newIntensity)

        // Dispatch custom event to update rain
        window.dispatchEvent(new CustomEvent('rainIntensityChange', { detail: newIntensity }))
    }

    return (
        <>
            <style>{`
        .logo-glow-text {
          cursor: pointer;
          transition: text-shadow 0.3s ease;
        }
        
        .logo-glow-text:hover {
          text-shadow: 0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15;
        }
      `}</style>
            <header className="sticky top-4 z-40 flex flex-row justify-between items-center mb-8 sm:mb-12 bg-black/5 dark:bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-300 max-w-4xl mx-4 sm:mx-6 lg:mx-auto">
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
                <Link to="/" className="text-black dark:text-white font-medium hover:text-accent-blue transition-colors text-sm sm:text-base whitespace-nowrap">Back to Home</Link>
            </header>
        </>
    )
}

export default ProjectsHeader
