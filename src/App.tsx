import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectsPage from './components/ProjectsPage'
import BlogsPage from './components/BlogsPage'
import BlogPost1 from './components/BlogPost1'
import BlogPost2 from './components/BlogPost2'
import BlogPost3 from './components/BlogPost3'
import PrivacyPolicy from './components/PrivacyPolicy'
import MandelbrotPage from './components/MandelbrotPage'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-white dark:bg-bg-dark text-black dark:text-text-light min-h-screen relative transition-colors duration-300">
          <ScrollProgress />
          <BackgroundAnimation />
          <div className="relative w-full mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-8" style={{ zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blog/mach5" element={<BlogPost1 />} />
              <Route path="/blog/energy-intelligence" element={<BlogPost2 />} />
              <Route path="/blog/soviet-aerospace" element={<BlogPost3 />} />
              <Route path="/mandelbrot" element={<MandelbrotPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
