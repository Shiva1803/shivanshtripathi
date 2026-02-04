import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MandelbrotCanvas, { MandelbrotCanvasRef } from './MandelbrotCanvas'

const MandelbrotPage: React.FC = () => {
  const [center, setCenter] = useState<[number, number]>([-0.5, 0])
  const [zoom, setZoom] = useState(1)
  const [maxIterations, setMaxIterations] = useState(100)
  const [paletteMode, setPaletteMode] = useState(0)
  const [rainIntensity, setRainIntensity] = useState(150)
  const [isJuliaMode, setIsJuliaMode] = useState(false)
  const [juliaConstant, setJuliaConstant] = useState<[number, number]>([-0.7, 0.27015])
  const navigate = useNavigate()
  const canvasRef = useRef<MandelbrotCanvasRef>(null)

  const intensityLevels = [150, 250, 350, 450]

  const palettes = [
    { name: 'Classic', value: 0 },
    { name: 'Neon', value: 1 },
    { name: 'Grayscale', value: 2 }
  ]

  const presets = [
    { name: 'Default', center: [-0.5, 0] as [number, number], zoom: 1, iterations: 100 },
    { name: 'Seahorse Valley', center: [-0.75, 0.1] as [number, number], zoom: 100, iterations: 150 },
    { name: 'Elephant Valley', center: [0.25, 0] as [number, number], zoom: 200, iterations: 200 },
    { name: 'Spiral Valley', center: [-0.16, 1.04] as [number, number], zoom: 300, iterations: 250 },
    { name: 'Mini Mandelbrot', center: [-1.25066, 0.02012] as [number, number], zoom: 800, iterations: 300 },
    { name: 'Triple Spiral', center: [-0.7269, 0.1889] as [number, number], zoom: 500, iterations: 200 }
  ]

  const handleReset = useCallback(() => {
    if (isJuliaMode) {
      // Reset Julia set view to default centered position
      setCenter([0, 0])
      setZoom(1)
      setMaxIterations(100)
    } else {
      // Reset Mandelbrot set to default view
      setCenter([-0.5, 0])
      setZoom(1)
      setMaxIterations(100)
    }
  }, [isJuliaMode])

  const handlePreset = useCallback((preset: typeof presets[0]) => {
    setCenter(preset.center)
    setZoom(preset.zoom)
    setMaxIterations(preset.iterations)
  }, [])

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

  const handleScreenshot = useCallback(() => {
    if (canvasRef.current) {
      try {
        const dataURL = canvasRef.current.getScreenshot()
        if (dataURL) {
          const link = document.createElement('a')
          link.download = `${isJuliaMode ? 'julia' : 'mandelbrot'}-fractal-${Date.now()}.png`
          link.href = dataURL
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          alert('Screenshot export failed. Please try again.')
        }
      } catch (error) {
        console.error('Failed to export screenshot:', error)
        alert('Screenshot export failed. Please try again.')
      }
    }
  }, [isJuliaMode])

  const toggleFractalMode = useCallback(() => {
    setIsJuliaMode(prev => !prev)
    // Reset to default view when switching modes
    setCenter([-0.5, 0])
    setZoom(1)
  }, [])

  const handleCanvasClick = useCallback((clickPoint: [number, number]) => {
    if (!isJuliaMode) {
      // Switch to Julia mode and use clicked point as constant
      setJuliaConstant(clickPoint)
      setIsJuliaMode(true)
      setCenter([0, 0]) // Center Julia set
      setZoom(1)
    } else {
      // Switch back to Mandelbrot mode
      setIsJuliaMode(false)
      setCenter([-0.5, 0]) // Reset to default Mandelbrot view
      setZoom(1)
    }
  }, [isJuliaMode])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case '+':
        case '=':
          setZoom(prev => Math.min(prev * 1.5, 1000000))
          break
        case '-':
          setZoom(prev => Math.max(prev / 1.5, 0.1))
          break
        case 'r':
          handleReset()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleReset])

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark text-black dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Header - On charcoal background */}
      <div className="relative top-4 left-4 right-4 z-20 px-4">
        <header className="flex flex-row justify-between items-center bg-black/5 dark:bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-300 max-w-4xl mx-auto">
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
      </div>

      {/* Title - On charcoal background with more spacing */}
      <div className="relative z-10 flex flex-col items-center py-8 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-4 text-center">
          Interactive {isJuliaMode ? 'Julia' : 'Mandelbrot'} Set
        </h1>
        <p className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">
          <strong>Tip:</strong> {isJuliaMode 
            ? 'Click any point to revert to its Mandelbrot set!' 
            : 'Click any point to generate its Julia set!'}
        </p>
      </div>

      {/* Canvas - Positioned below header and title */}
      <div className="relative flex justify-center">
        <div className="w-full max-w-4xl relative" style={{ height: '60vh' }}>
          <MandelbrotCanvas
            ref={canvasRef}
            center={center}
            zoom={zoom}
            maxIterations={maxIterations}
            paletteMode={paletteMode}
            isJuliaMode={isJuliaMode}
            juliaConstant={juliaConstant}
            onCenterChange={setCenter}
            onZoomChange={setZoom}
            onCanvasClick={handleCanvasClick}
          />
          
          {/* Zoom Controls Overlay */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
            <button
              onClick={() => setZoom(prev => Math.min(prev * 1.5, 1000000))}
              className="w-10 h-10 bg-black/70 dark:bg-white/20 backdrop-blur-md hover:bg-black/90 dark:hover:bg-white/30 text-white dark:text-white border border-white/20 rounded-lg flex items-center justify-center text-2xl font-light transition-all duration-200 hover:scale-110 shadow-lg"
              title="Zoom In"
            >
              +
            </button>
            <button
              onClick={() => setZoom(prev => Math.max(prev / 1.5, 0.1))}
              className="w-10 h-10 bg-black/70 dark:bg-white/20 backdrop-blur-md hover:bg-black/90 dark:hover:bg-white/30 text-white dark:text-white border border-white/20 rounded-lg flex items-center justify-center text-2xl font-light transition-all duration-200 hover:scale-110 shadow-lg"
              title="Zoom Out"
            >
              −
            </button>
          </div>
        </div>
      </div>

      {/* Controls Panel - Below canvas with minimal spacing */}
      <div className="relative z-10 p-4 -mt-2">
        <div className="bg-black/70 backdrop-blur-md rounded-lg p-4 max-w-4xl mx-auto border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Iterations Control */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Iterations: {maxIterations}
              </label>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={maxIterations}
                onChange={(e) => setMaxIterations(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Color Palette */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Color Palette
              </label>
              <select
                value={paletteMode}
                onChange={(e) => setPaletteMode(Number(e.target.value))}
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:border-white/40"
              >
                {palettes.map((palette) => (
                  <option key={palette.value} value={palette.value} className="bg-black">
                    {palette.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Toggle and Info Display */}
            <div className="space-y-2">
              <button
                onClick={toggleFractalMode}
                className="w-full bg-yellow-600/80 hover:bg-yellow-600 border border-yellow-600 rounded px-4 py-2 text-white transition-colors font-medium mb-3"
              >
                {isJuliaMode ? '← Mandelbrot' : 'Julia →'}
              </button>
              <div className="text-sm">
                <div className="text-white/80">Zoom: {zoom.toFixed(2)}x</div>
                <div className="text-white/80">
                  Center: ({center[0].toFixed(6)}, {center[1].toFixed(6)})
                </div>
                {isJuliaMode && (
                  <div className="text-white/80">
                    Julia C: ({juliaConstant[0].toFixed(6)}, {juliaConstant[1].toFixed(6)})
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleReset}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded px-4 py-2 text-white transition-colors mb-2"
              >
                Reset View
              </button>
              <button
                onClick={handleScreenshot}
                className="w-full bg-accent-blue/80 hover:bg-accent-blue border border-accent-blue rounded px-4 py-2 text-white transition-colors flex items-center justify-center gap-2"
              >
                Download Fractal
              </button>
            </div>
          </div>

          {/* Quick Locations */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="mb-3">
              <span className="text-sm text-white/80 font-medium">Quick Locations:</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => handlePreset(preset)}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-sm text-white transition-colors hover:scale-105 transform duration-200 text-center"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/60">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <strong>Mouse:</strong> Scroll to zoom, drag to pan
              </div>
              <div>
                <strong>Touch:</strong> Pinch to zoom, drag to pan
              </div>
              <div>
                <strong>Keys:</strong> +/- zoom, R reset
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative z-10 p-4 pt-8">
        <div className="max-w-4xl mx-auto text-black dark:text-white space-y-6">
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent-blue">What is the Mandelbrot Set?</h3>
            <p className="text-base text-black/80 dark:text-white/80 leading-relaxed">
              The Mandelbrot set is a fractal - a mathematical object that exhibits infinite complexity and self-similarity at every scale. 
              It's defined by the simple equation z = z² + c, where points that don't escape to infinity belong to the set (shown in black). 
              Despite its simple definition, it creates one of the most beautiful and complex patterns in mathematics.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent-blue">How it Works</h3>
            <p className="text-base text-black/80 dark:text-white/80 leading-relaxed">
              For each pixel on the screen, we iterate the formula z = z² + c starting with z=0. If the value escapes (|z| &gt; 2) within our iteration limit, 
              we color it based on how quickly it escaped - creating the beautiful colored regions you see. Points that never escape form the iconic black fractal boundary. 
              The more iterations we use, the more detail we can see in the fractal's intricate edges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent-blue">Tech Stack</h3>
            <p className="text-base text-black/80 dark:text-white/80 leading-relaxed">
              This interactive fractal explorer is built with <strong>React</strong> and <strong>TypeScript</strong> for the user interface, 
              <strong>Three.js</strong> for WebGL rendering, and custom <strong>GLSL shaders</strong> for real-time fractal computation directly on the GPU. 
              The responsive design is styled with <strong>Tailwind CSS</strong>. By leveraging GPU parallel processing, we can render millions of calculations 
              in real-time, allowing for smooth zooming and panning through the infinite fractal landscape.
            </p>
          </div>

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
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

export default MandelbrotPage