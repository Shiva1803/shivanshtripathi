import React, { useRef, useEffect, useCallback, useImperativeHandle } from 'react'
import * as THREE from 'three'

interface MandelbrotCanvasProps {
  center: [number, number]
  zoom: number
  maxIterations: number
  paletteMode: number
  isJuliaMode: boolean
  juliaConstant: [number, number]
  onCenterChange: (center: [number, number]) => void
  onZoomChange: (zoom: number) => void
  onCanvasClick: (point: [number, number]) => void
}

export interface MandelbrotCanvasRef {
  getScreenshot: () => string | null
}

const MandelbrotCanvas = React.forwardRef<MandelbrotCanvasRef, MandelbrotCanvasProps>(
  ({ center, zoom, maxIterations, paletteMode, isJuliaMode, juliaConstant, onCenterChange, onZoomChange, onCanvasClick }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const animationIdRef = useRef<number | null>(null)
  
  // Expose screenshot method
  useImperativeHandle(ref, () => ({
    getScreenshot: () => {
      if (rendererRef.current) {
        try {
          return rendererRef.current.domElement.toDataURL('image/png')
        } catch (error) {
          console.error('Failed to get screenshot:', error)
          return null
        }
      }
      return null
    }
  }))
  
  // Mouse interaction state
  const mouseRef = useRef({
    isDown: false,
    lastX: 0,
    lastY: 0,
    startCenter: [0, 0] as [number, number],
    hasMoved: false
  })

  // Touch interaction state
  const touchRef = useRef({
    lastDistance: 0,
    lastCenter: [0, 0] as [number, number]
  })

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    precision highp float;
    
    uniform vec2 u_resolution;
    uniform vec2 u_center;
    uniform float u_zoom;
    uniform int u_maxIterations;
    uniform int u_paletteMode;
    uniform bool u_isJuliaMode;
    uniform vec2 u_juliaConstant;
    
    varying vec2 vUv;
    
    vec3 getColor(float t, int mode) {
        if (mode == 0) {
            // Classic palette
            return vec3(
                0.5 + 0.5 * cos(3.0 + t * 0.15),
                0.5 + 0.5 * cos(3.0 + t * 0.15 + 2.0),
                0.5 + 0.5 * cos(3.0 + t * 0.15 + 4.0)
            );
        } else if (mode == 1) {
            // Neon palette
            float r = 0.5 + 0.5 * sin(t * 0.1);
            float g = 0.5 + 0.5 * sin(t * 0.1 + 2.0);
            float b = 0.5 + 0.5 * sin(t * 0.1 + 4.0);
            return vec3(r * r, g * g, b * b) * 2.0;
        } else {
            // Grayscale palette
            float intensity = t / float(u_maxIterations);
            return vec3(intensity);
        }
    }
    
    void main() {
        // Fix aspect ratio
        vec2 uv = vUv - 0.5;
        float aspect = u_resolution.x / u_resolution.y;
        uv.x *= aspect;
        
        vec2 coord = uv * 4.0 / u_zoom + u_center;
        
        vec2 z, c;
        
        if (u_isJuliaMode) {
            // Julia set: z starts at coordinate, c is constant
            z = coord;
            c = u_juliaConstant;
        } else {
            // Mandelbrot set: z starts at origin, c is coordinate
            z = vec2(0.0);
            c = coord;
        }
        
        float iterations = 0.0;
        
        for (int i = 0; i < 2000; i++) {
            if (i >= u_maxIterations) break;
            
            if (dot(z, z) > 4.0) {
                iterations = float(i) + 1.0 - log2(log2(dot(z, z)));
                break;
            }
            
            z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
            iterations = float(i + 1);
        }
        
        if (iterations >= float(u_maxIterations)) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
            vec3 color = getColor(iterations, u_paletteMode);
            gl_FragColor = vec4(color, 1.0);
        }
    }
  `

  const initThreeJS = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: false,
      preserveDrawingBuffer: true 
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_resolution: { value: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight) },
        u_center: { value: new THREE.Vector2(center[0], center[1]) },
        u_zoom: { value: zoom },
        u_maxIterations: { value: maxIterations },
        u_paletteMode: { value: paletteMode },
        u_isJuliaMode: { value: isJuliaMode },
        u_juliaConstant: { value: new THREE.Vector2(juliaConstant[0], juliaConstant[1]) }
      }
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    rendererRef.current = renderer
    sceneRef.current = scene
    materialRef.current = material

    const animate = () => {
      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, camera)
      }
      animationIdRef.current = requestAnimationFrame(animate)
    }
    animate()
  }, [center, zoom, maxIterations, paletteMode, isJuliaMode, juliaConstant, vertexShader, fragmentShader])

  const handleResize = useCallback(() => {
    if (!canvasRef.current || !rendererRef.current || !materialRef.current) return

    const canvas = canvasRef.current
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    rendererRef.current.setSize(width, height)
    materialRef.current.uniforms.u_resolution.value.set(width, height)
  }, [])

  // Mouse event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    mouseRef.current.isDown = true
    mouseRef.current.lastX = e.clientX
    mouseRef.current.lastY = e.clientY
    mouseRef.current.startCenter = [...center]
    mouseRef.current.hasMoved = false
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grabbing'
    }
  }, [center])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mouseRef.current.isDown || !canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const deltaX = (e.clientX - mouseRef.current.lastX) / rect.width
    const deltaY = (e.clientY - mouseRef.current.lastY) / rect.height

    // Mark as moved if there's significant movement (more than 5 pixels)
    const pixelDeltaX = Math.abs(e.clientX - mouseRef.current.lastX)
    const pixelDeltaY = Math.abs(e.clientY - mouseRef.current.lastY)
    if (pixelDeltaX > 5 || pixelDeltaY > 5) {
      mouseRef.current.hasMoved = true
    }

    const newCenter: [number, number] = [
      mouseRef.current.startCenter[0] - (deltaX * 4.0) / zoom,
      mouseRef.current.startCenter[1] + (deltaY * 4.0) / zoom
    ]

    onCenterChange(newCenter)
  }, [zoom, onCenterChange])

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab'
    }
  }, [])

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!canvasRef.current || mouseRef.current.hasMoved) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Fix aspect ratio
    const aspect = rect.width / rect.height
    const adjustedX = x * aspect

    // Convert to complex plane coordinates
    const complexX = adjustedX * 4.0 / zoom + center[0]
    const complexY = -y * 4.0 / zoom + center[1]

    onCanvasClick([complexX, complexY])
  }, [center, zoom, onCanvasClick])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5

    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.max(0.1, Math.min(zoom * zoomFactor, 1000000))

    // Zoom towards mouse position
    const worldMouseX = mouseX * 4.0 / zoom
    const worldMouseY = -mouseY * 4.0 / zoom
    
    const newCenter: [number, number] = [
      center[0] + worldMouseX * (1 - zoom / newZoom),
      center[1] + worldMouseY * (1 - zoom / newZoom)
    ]

    onZoomChange(newZoom)
    onCenterChange(newCenter)
  }, [center, zoom, onCenterChange, onZoomChange])

  // Touch event handlers
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const getTouchCenter = (touches: React.TouchList): [number, number] => {
    if (touches.length === 0) return [0, 0]
    let x = 0, y = 0
    for (let i = 0; i < touches.length; i++) {
      x += touches[i].clientX
      y += touches[i].clientY
    }
    return [x / touches.length, y / touches.length]
  }

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    
    if (e.touches.length === 2) {
      touchRef.current.lastDistance = getTouchDistance(e.touches)
      touchRef.current.lastCenter = getTouchCenter(e.touches)
    } else if (e.touches.length === 1) {
      mouseRef.current.isDown = true
      mouseRef.current.lastX = e.touches[0].clientX
      mouseRef.current.lastY = e.touches[0].clientY
      mouseRef.current.startCenter = [...center]
    }
  }, [center])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()

    if (e.touches.length === 2) {
      // Pinch zoom
      const distance = getTouchDistance(e.touches)
      const touchCenter = getTouchCenter(e.touches)
      
      if (touchRef.current.lastDistance > 0) {
        const zoomFactor = distance / touchRef.current.lastDistance
        const newZoom = Math.max(0.1, Math.min(zoom * zoomFactor, 1000000))
        onZoomChange(newZoom)
      }
      
      touchRef.current.lastDistance = distance
      touchRef.current.lastCenter = touchCenter
    } else if (e.touches.length === 1 && mouseRef.current.isDown && canvasRef.current) {
      // Pan
      const canvas = canvasRef.current
      const rect = canvas.getBoundingClientRect()
      const deltaX = (e.touches[0].clientX - mouseRef.current.lastX) / rect.width
      const deltaY = (e.touches[0].clientY - mouseRef.current.lastY) / rect.height

      const newCenter: [number, number] = [
        mouseRef.current.startCenter[0] - (deltaX * 4.0) / zoom,
        mouseRef.current.startCenter[1] + (deltaY * 4.0) / zoom
      ]

      onCenterChange(newCenter)
    }
  }, [zoom, onCenterChange, onZoomChange])

  const handleTouchEnd = useCallback(() => {
    mouseRef.current.isDown = false
    touchRef.current.lastDistance = 0
  }, [])

  // Update uniforms when props change
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_center.value.set(center[0], center[1])
      materialRef.current.uniforms.u_zoom.value = zoom
      materialRef.current.uniforms.u_maxIterations.value = maxIterations
      materialRef.current.uniforms.u_paletteMode.value = paletteMode
      materialRef.current.uniforms.u_isJuliaMode.value = isJuliaMode
      materialRef.current.uniforms.u_juliaConstant.value.set(juliaConstant[0], juliaConstant[1])
    }
  }, [center, zoom, maxIterations, paletteMode, isJuliaMode, juliaConstant])

  useEffect(() => {
    initThreeJS()
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [initThreeJS, handleResize])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    />
  )
})

MandelbrotCanvas.displayName = 'MandelbrotCanvas'

export default MandelbrotCanvas