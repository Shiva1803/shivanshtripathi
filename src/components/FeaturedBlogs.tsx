import { Link } from 'react-router-dom'

interface BlogPost {
    title: string
    excerpt: string
    date: string
    category: string
    image?: string
}

const FeaturedBlogs = () => {
    const blogs: BlogPost[] = [
        {
            title: "Can an LLM be trusted at Mach 5?",
            excerpt: "Why probablistic Intelligence struggles in hypersonic, safety-critical systems?",
            date: "Dec 6, 2025",
            category: "AI, Aerospace",
            image: "/SR-71.jpg"
        },
        {
            title: "The Future of AI-Assisted Coding and How It Will Shape Development",
            excerpt: "Tips and tricks to customize your design system efficiently using tailwind.config.js.",
            date: "Dec 15, 2025",
            category: "AI, Knowledge",
            image: "/claudeai.jpg"
        },
        {
            title: "The Energy Cost of Intelligence: From Ant Colonies to Data Centers",
            excerpt: "Strategies for database indexing, caching strategies, and API response time optimization.",
            date: "Dec 21, 2025",
            category: "AI, Knowledge",
            image: "/pexels-pixabay-46169.jpg"
        },
        {
            title: "Soviet Aerospace. Brutal yet Beautiful.",
            excerpt: "Exploring the latest trends in decentralized applications and smart contract security.",
            date: "Dec 30, 2025",
            category: "Aerospace",
            image: "/SovietAerospace.png"
        }
    ]

    return (
        <section className="mb-12 sm:mb-16" id="blogs">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
                Featured Blogs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {blogs.map((blog, index) => (
                    <a
                        key={index}
                        href={index === 0 ? '/blog/mach5' : index === 1 ? '/blog/ai-coding' : index === 2 ? '/blog/energy-intelligence' : index === 3 ? '/blog/soviet-aerospace' : '#'}
                        className="group relative rounded-2xl border border-gray-400 dark:border-[#495057] hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-56 sm:h-64 block"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-gray-700">
                            {blog.image && (
                                <>
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            console.error(`Failed to load image: ${blog.image}`)
                                            e.currentTarget.style.display = 'none'
                                        }}
                                        onLoad={() => {
                                            console.log(`Successfully loaded: ${blog.image}`)
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/50"></div>
                                </>
                            )}
                        </div>
                        
                        {/* Content Overlay */}
                        <div className="relative h-full p-4 sm:p-6 flex flex-col justify-between text-white">
                            <div>
                                <div className="flex justify-between items-center mb-3 sm:mb-4">
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-white/20 backdrop-blur-sm">
                                        {blog.category}
                                    </span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-white/80">{blog.date}</span>
                                <span className="text-lg sm:text-xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <style>{`
        @keyframes glow-sweep-dark {
          0% {
            box-shadow: -100px 0 30px rgba(255, 255, 255, 0.3) inset,
                        0 0 20px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 100px 0 30px rgba(255, 255, 255, 0.3) inset,
                        0 0 20px rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes glow-sweep-light {
          0% {
            box-shadow: -100px 0 30px rgba(0, 0, 0, 0.1) inset,
                        0 0 20px rgba(0, 0, 0, 0.1);
          }
          100% {
            box-shadow: 100px 0 30px rgba(0, 0, 0, 0.1) inset,
                        0 0 20px rgba(0, 0, 0, 0.1);
          }
        }
        
        .view-all-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%);
          animation: glow-sweep-light 3s ease-in-out infinite alternate;
        }

        html.dark .view-all-btn {
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          animation: glow-sweep-dark 3s ease-in-out infinite alternate;
        }
      `}</style>

            <div className="flex justify-start">
                <Link
                    to="/blogs"
                    className="view-all-btn px-5 py-2 rounded-full border border-black dark:border-white text-black dark:text-white font-normal text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                >
                    VIEW ALL BLOGS
                    <span className="text-lg">→</span>
                </Link>
            </div>
        </section>
    )
}

export default FeaturedBlogs
