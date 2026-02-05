import ProjectsHeader from './ProjectsHeader'

interface BlogPost {
    title: string
    excerpt: string
    date: string
    category: string
    image?: string
}

const BlogsPage = () => {
    const blogs: BlogPost[] = [
        {
            title: "Can an LLM be trusted at Mach 5?",
            excerpt: "Why probablistic Intelligence struggles in hypersonic, safety-critical systems?",
            date: "Dec 6, 2025",
            category: "AI, Aerospace",
            image: "/SR-71.jpg"
        },
        {
            title: "The Line that LLMs can never cross. Neural Scaling Laws",
            excerpt: "Tips and tricks to customize your design system efficiently using tailwind.config.js.",
            date: "Dec 15, 2025",
            category: "AI, Knowledge",
            image: "/LLMsBoundary.png"
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
        <div className="min-h-screen pt-0 pb-12 sm:pb-16">
            <ProjectsHeader />
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-6 sm:pb-8">Blogs</h1>

                <div className="space-y-6 sm:space-y-8">
                    {blogs.map((blog, index) => (
                        <a
                            key={index}
                            href={index === 0 ? '/blog/mach5' : index === 2 ? '/blog/energy-intelligence' : index === 3 ? '/blog/soviet-aerospace' : '#'}
                            className="group relative h-28 sm:h-32 md:h-40 rounded-2xl bg-black/5 dark:bg-white/15 backdrop-blur-md border border-black/10 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.02] hover:border-black dark:hover:border-white hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-between px-4 sm:px-6 md:px-10 overflow-hidden block"
                        >
                            {/* Blog Image */}
                            {blog.image ? (
                                <div className="h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            ) : (
                                <div className="h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40 bg-gray-300 dark:bg-[#2a2e33] rounded-lg opacity-50 group-hover:opacity-80 transition-opacity flex-shrink-0"></div>
                            )}

                            {/* Blog Title */}
                            <div className="flex-1 px-3 sm:px-4 md:px-6 min-w-0">
                                <h3 className="text-sm sm:text-base md:text-xl font-bold text-black dark:text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <div className="flex gap-2 sm:gap-4 mt-1 sm:mt-2">
                                    <span className="text-xs text-gray-600 dark:text-gray-400 truncate">{blog.category}</span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">{blog.date}</span>
                                </div>
                            </div>

                            {/* Arrow Icon */}
                            <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0">
                                →
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogsPage
