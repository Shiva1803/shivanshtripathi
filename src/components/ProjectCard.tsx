import React from 'react'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    link?: string
    image?: string
    index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, image, index }) => {
    return (
        <div
            className="bg-gray-200 dark:bg-light-gray rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,0,0,0.2),0_0_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2),0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300"
        >
            <div className="w-full h-40 sm:h-48 bg-gray-300 dark:bg-[#2a2e33] flex items-center justify-center text-gray-600 dark:text-secondary-gray overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : index === 0 ? '' : 'Project Image'}
            </div>
            <div className="p-5 sm:p-6 md:p-8">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-semibold mb-2 hover:text-yellow-400 transition-colors inline-block"
                    >
                        <h3>{title}</h3>
                    </a>
                ) : (
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                )}
                <p className="text-gray-600 dark:text-secondary-gray mb-4 sm:mb-6 text-sm leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-white dark:bg-bg-dark text-gray-600 dark:text-secondary-gray px-3 py-1 rounded-full text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">

                    <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:scale-110 transition-transform text-xs sm:text-sm">
                        <img src="/githubnew.png" alt="Source" className="w-4 h-4 sm:w-5 sm:h-5 invert dark:invert-0" />
                        Source
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
