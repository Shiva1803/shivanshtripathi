# Mandelbrot Set Explorer

A production-ready, GPU-accelerated Mandelbrot Set visualization built with React, TypeScript, and WebGL (Three.js).

## Features

### 🎮 Interactive Controls
- **Mouse wheel zoom** - Zoom in/out centered on cursor position
- **Click & drag** - Pan around the fractal
- **Touch support** - Pinch to zoom and drag to pan on mobile devices
- **Smooth interpolation** - No jump cuts when zooming
- **Reset button** - Return to default view

### 🎨 Customization
- **Iteration slider** - Adjust detail level (50-2000 iterations)
- **Color palettes** - Classic, Neon, and Grayscale modes
- **Real-time updates** - All changes applied instantly
- **Preset locations** - Quick navigation to interesting areas

### ⚡ Performance
- **GPU-only rendering** - All computation done in GLSL fragment shader
- **WebGL acceleration** - Smooth 60fps rendering
- **Responsive design** - Works on desktop and mobile
- **Optimized uniforms** - Minimal CPU overhead

### 🎯 Technical Features
- **Smooth coloring** - Uses fractional iteration escape formula
- **Precision handling** - Avoids artifacts during moderate zoom levels
- **Memory management** - Proper WebGL resource cleanup
- **TypeScript strict** - Full type safety

## Usage

### Navigation
- **Scroll wheel**: Zoom in/out
- **Click + drag**: Pan around
- **Touch**: Pinch to zoom, drag to pan
- **Keyboard shortcuts**:
  - `+` or `=`: Zoom in
  - `-`: Zoom out  
  - `R`: Reset to default view

### Controls Panel
- **Iterations**: Higher values show more detail but reduce performance
- **Color Palette**: Switch between different coloring schemes
- **Info Display**: Shows current zoom level and center coordinates
- **Quick Locations**: Jump to interesting fractal features

## Implementation Details

### Architecture
```
src/components/
├── MandelbrotPage.tsx      # Main page component with UI controls
├── MandelbrotCanvas.tsx    # WebGL canvas with Three.js integration
└── ...

src/shaders/
├── mandelbrot.frag         # Fragment shader for Mandelbrot computation
└── mandelbrot.vert         # Vertex shader (simple passthrough)
```

### Shader Uniforms
- `u_center`: Complex plane center coordinates
- `u_zoom`: Zoom level
- `u_maxIterations`: Maximum iteration count
- `u_paletteMode`: Color palette selection
- `u_resolution`: Canvas resolution

### Key Technologies
- **React + TypeScript**: Component architecture and type safety
- **Three.js**: WebGL abstraction and rendering pipeline
- **GLSL**: GPU-accelerated fractal computation
- **Vite**: Build system and development server

## Deployment

The application builds to static assets and deploys seamlessly to Vercel:

```bash
npm run build
```

All computation happens on the client-side GPU with no server dependencies.

## Routes

- `/mandelbrot` - Main Mandelbrot explorer
- Header navigation includes "Fractal" link
- Labs page features the explorer as an experiment

## Performance Notes

- Optimized for 60fps on modern devices
- Uses requestAnimationFrame for smooth rendering
- Minimal React re-renders through refs
- Efficient WebGL resource management
- Mobile-friendly touch controls

The implementation prioritizes correctness, performance, and user experience while maintaining clean, maintainable code.