import { Link } from 'react-router-dom'
import ProjectsHeader from './ProjectsHeader'

const LabsPage = () => {
    const experiments = [
        {
            title: "Mandelbrot Set Explorer",
            description: "Interactive GPU-accelerated fractal visualization with real-time zooming, panning, and customizable color palettes. Built with WebGL and Three.js.",
            tags: ["WebGL", "Three.js", "GLSL", "React"],
            link: "/mandelbrot",
            isInternal: true
        }
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-bg-dark text-black dark:text-white pt-8 pb-16 relative z-10 transition-colors duration-300">
            <ProjectsHeader />
            <div className="max-w-[1400px] mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center border-b border-black/20 dark:border-white/20 pb-8">
                    Labs & Experiments
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiments.map((experiment, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 dark:bg-light-gray rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,0,0,0.2),0_0_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2),0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300"
                        >
                            <div className="w-full h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center text-white overflow-hidden">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">∞</div>
                                    <div className="text-sm opacity-80">Interactive Fractal</div>
                                </div>
                            </div>
                            <div className="p-8">
                                {experiment.isInternal ? (
                                    <Link
                                        to={experiment.link}
                                        className="text-xl font-semibold mb-2 hover:text-yellow-400 transition-colors inline-block"
                                    >
                                        <h3>{experiment.title}</h3>
                                    </Link>
                                ) : (
                                    <a
                                        href={experiment.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-semibold mb-2 hover:text-yellow-400 transition-colors inline-block"
                                    >
                                        <h3>{experiment.title}</h3>
                                    </a>
                                )}
                                <p className="text-gray-600 dark:text-secondary-gray mb-6 text-sm leading-relaxed">
                                    {experiment.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {experiment.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className="bg-white dark:bg-bg-dark text-gray-600 dark:text-secondary-gray px-3 py-1 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-8">
                                    {experiment.isInternal ? (
                                        <Link
                                            to={experiment.link}
                                            className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:scale-110 transition-transform text-sm"
                                        >
                                            <span>🚀</span>
                                            Launch
                                        </Link>
                                    ) : (
                                        <a 
                                            href={experiment.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:scale-110 transition-transform text-sm"
                                        >
                                            <span>🚀</span>
                                            Launch
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LabsPage
