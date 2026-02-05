import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
const Header = () => {
  const [rainIntensity, setRainIntensity] = useState(150)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const intensityLevels = [150, 250, 350, 450]



  const handleLogoClick = () => {
    window.location.reload()
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

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
        }

        .hamburger span {
          width: 20px;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      `}</style>
      <header className="sticky top-4 z-40 mb-6 sm:mb-8 md:mb-12">
        <div className="flex flex-row justify-between items-center bg-black/5 dark:bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-300 max-w-4xl mx-4 sm:mx-6 lg:mx-auto">
          <button
            onClick={toggleTheme}
            className="hidden xl:flex absolute top-1/2 -translate-y-1/2 left-[calc(-1*(100vw-100%)/4)] -translate-x-1/2 w-16 h-16 rounded-full bg-gray-200 dark:bg-white items-center justify-center hover:scale-110 transition-transform duration-300 focus:outline-none shadow-md border border-gray-300 dark:border-gray-700 animate-floating"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{ animationDuration: '3s' }}
          >
            <img
              src={theme === 'dark' ? '/dark_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg' : '/light_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg'}
              alt="Theme Toggle"
              className="w-8 h-8 dark:brightness-[10]"
            />
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/rainmeter2.png"
              alt="Rain Control"
              onClick={handleRainClick}
              className="h-7 sm:h-8 w-auto object-contain hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] dark:hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer"
              title={`Rain Intensity: ${rainIntensity === 150 ? 'Light' : rainIntensity === 250 ? 'Medium' : rainIntensity === 350 ? 'Heavy' : 'Storm'} `}
            />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white logo-glow-text whitespace-nowrap" onClick={handleLogoClick}>shivansh</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-4 lg:gap-6 items-center text-sm lg:text-base">
              <li><Link to="/mandelbrot" className="text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors whitespace-nowrap">Labs</Link></li>
              <li><Link to="/projects" className="text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors whitespace-nowrap">Projects</Link></li>
              <li><Link to="/blogs" className="text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors whitespace-nowrap">Blogs</Link></li>
              <li><a href="https://drive.google.com/file/d/1DdWGWBu7YMFdrIOFjLQrikpWnTmSIunq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors whitespace-nowrap">Resume</a></li>
            </ul>
          </nav>

          {/* Tablet/Desktop Theme Toggle - Inside Header */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex xl:hidden w-10 h-10 rounded-full bg-gray-200 dark:bg-white items-center justify-center hover:scale-110 transition-transform duration-300 focus:outline-none shadow-md border border-gray-300 dark:border-gray-700 flex-shrink-0"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <img
              src={theme === 'dark' ? '/dark_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg' : '/light_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg'}
              alt="Theme Toggle"
              className="w-6 h-6 dark:brightness-[10]"
            />
          </button>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 focus:outline-none shadow-md border border-gray-300 dark:border-gray-700 flex-shrink-0"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <img
                src={theme === 'dark' ? '/dark_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg' : '/light_mode_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg'}
                alt="Theme Toggle"
                className="w-5 h-5 sm:w-6 sm:h-6 dark:brightness-[10]"
              />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`hamburger text-black dark:text-white ${mobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 mx-4 bg-black/5 dark:bg-white/15 backdrop-blur-md rounded-3xl px-5 py-4 border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-fadeIn">
            <ul className="flex flex-col gap-3 text-center">
              <li><Link to="/mandelbrot" onClick={() => setMobileMenuOpen(false)} className="block text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors py-2">Labs</Link></li>
              <li><Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="block text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors py-2">Projects</Link></li>
              <li><Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="block text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors py-2">Blogs</Link></li>
              <li><a href="https://drive.google.com/file/d/1DdWGWBu7YMFdrIOFjLQrikpWnTmSIunq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-black dark:text-white font-medium hover:text-accent-blue dark:hover:text-blue-400 transition-colors py-2">Resume</a></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}

export default Header
