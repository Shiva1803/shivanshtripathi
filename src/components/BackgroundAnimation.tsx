import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLocation } from 'react-router-dom'

const BackgroundAnimation = () => {
  const [rainIntensity, setRainIntensity] = useState(150)
  const { theme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleRainIntensityChange = (event: Event) => {
      const customEvent = event as CustomEvent<number>
      setRainIntensity(customEvent.detail)
    }

    window.addEventListener('rainIntensityChange', handleRainIntensityChange)
    return () => window.removeEventListener('rainIntensityChange', handleRainIntensityChange)
  }, [])

  useEffect(() => {
    const rainContainer = document.querySelector('.rain-container')
    if (!rainContainer) return

    // Clear existing drops
    rainContainer.innerHTML = ''

    const dropCount = rainIntensity

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement('div')
      drop.className = 'rain-drop'

      const left = Math.random() * 100
      const delay = Math.random() * 2
      const duration = Math.random() * 0.5 + 0.7

      drop.style.left = `${left}%`
      drop.style.animationDelay = `${delay}s`
      drop.style.animationDuration = `${duration}s`

      rainContainer.appendChild(drop)
    }
  }, [rainIntensity, location.pathname])

  const rainColor = theme === 'dark' ? 'rgba(110, 123, 145, 0.5)' : 'rgba(0, 0, 0, 0.3)'
  const cloudColor = theme === 'dark' ? 'rgba(78, 78, 78, 0.8)' : 'rgba(0, 0, 0, 0.8)'
  const cloudShadow = theme === 'dark' ? 'rgba(30, 30, 30, 0.5)' : 'rgba(200, 200, 200, 0.5)'

  // Disable animation on Mandelbrot page and blog post pages
  if (location.pathname === '/mandelbrot' || location.pathname.startsWith('/blog/')) {
    return null
  }

  return (
    <>
      <style>{`
        .bg-animation-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .rain-container {
          position: absolute;
          top: -100px;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .rain-drop {
          position: absolute;
          width: 2px;
          height: 15px;
          background: ${rainColor};
          opacity: 0;
          border-radius: 50px;
          animation: rain 1s linear infinite;
          transition: background 0.3s ease;
        }
        
        @keyframes rain {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          25% {
            opacity: 0.5;
          }
          75% {
            opacity: 0.75;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0.2;
          }
        }
        
        .cloud {
          position: absolute;
          width: 180px;
          height: 60px;
          background: ${cloudColor};
          border-radius: 50px;
          opacity: 0.8;
          filter: blur(5px);
          box-shadow: 0 8px 5px ${cloudShadow};
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cloud:before {
          content: '';
          position: absolute;
          top: -25px;
          left: 35px;
          width: 60px;
          height: 60px;
          background: ${cloudColor};
          border-radius: 50%;
          box-shadow: 0 8px 5px ${cloudShadow};
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cloud:after {
          content: '';
          position: absolute;
          top: -40px;
          right: 35px;
          width: 80px;
          height: 80px;
          background: ${cloudColor};
          border-radius: 50%;
          box-shadow: 0 8px 5px ${cloudShadow};
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cloud-1 {
          animation: cloud-move-1 40s linear infinite;
        }
        
        .cloud-2 {
          animation: cloud-move-2 40s linear infinite;
        }
        
        .cloud-3 {
          animation: cloud-move-3 40s linear infinite;
        }
        
        .cloud-4 {
          animation: cloud-move-4 40s linear infinite;
        }
        
        @keyframes cloud-move-1 {
          0% {
            transform: translateX(-250px);
          }
          100% {
            transform: translateX(calc(100vw + 250px));
          }
        }
        
        @keyframes cloud-move-2 {
          0% {
            transform: translateX(calc(30vw - 250px));
          }
          100% {
            transform: translateX(calc(130vw + 250px));
          }
        }
        
        @keyframes cloud-move-3 {
          0% {
            transform: translateX(calc(60vw - 250px));
          }
          100% {
            transform: translateX(calc(160vw + 250px));
          }
        }
        
        @keyframes cloud-move-4 {
          0% {
            transform: translateX(calc(90vw - 250px));
          }
          100% {
            transform: translateX(calc(190vw + 250px));
          }
        }
      `}</style>

      <div className="bg-animation-wrapper">
        <div className="rain-container"></div>
        <div className="cloud cloud-1" style={{ top: '15%' }}></div>
        <div className="cloud cloud-2" style={{ top: '25%' }}></div>
        <div className="cloud cloud-3" style={{ top: '5%' }}></div>
        <div className="cloud cloud-4" style={{ top: '35%' }}></div>
      </div>
    </>
  )
}

export default BackgroundAnimation
