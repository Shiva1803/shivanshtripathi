
import ProjectCard from './ProjectCard'
import ProjectsHeader from './ProjectsHeader'

const ProjectsPage = () => {
    // Duplicating projects to fill 6 spots as requested (3x2 layout)
    const projects = [
        {
            title: "Text In Sight",
            description: "NLP based sentence analyzer which returns sentiments (positive/negative) and themes (custom set) via BERT.",
            tags: ["Python", "Streamlit", "Python Libraries"],
            link: "https://github.com/Shiva1803/TextInSight",
            image: "/TextInSight.png"
        },
        {
            title: "Projectile Motion Simulator",
            description: "An interactive web app that visualizes projectile motion with real-time plots, velocity vectors, and customizable physics parameters like drag, wind, and launch angle.",
            tags: ["Fortran", "CSS", "JavaScript", "Python"],
            link: "https://github.com/Shiva1803/Projectile-Motion-Simulator",
            image: "/projectile-motion.jpg"
        },
        {
            title: "Owly",
            description: "Zero-Knowledge Notes & Passwords Manager built on Sui, utilizing Seal's encryption and Walrus' blob storage.",
            tags: ["Move", "Typescript", "React"],
            link: "https://github.com/Shiva1803/Owly",
            image: "/owly.png"
        },
        {
            title: "Sentiment and Thematic Analysis Tool",
            description: "The older iteration of Text in Sight. This was built using Naive Bayes and Logistic Regression instead of modern day Transformer Architecture.",
            tags: ["Python", "Python Libraries", "Streamlit"],
            link: "https://github.com/Shiva1803/PBL",
            image: "/pbl.png"
        },
        {
            title: "Youtube Playlist Manager",
            description: "My semester end project for OOPS in Python, done in my 3rd semester. A simple YouTube playlist manager where one can List, Add, Update and Delete YouTube Videos.",
            tags: ["Python", "Javascript", "CSS"],
            link: "https://github.com/Shiva1803/Youtube-Playlist-Manager",
            image: "/ytplaylistmanager.png"
        }
    ]

    return (
        <div className="min-h-screen pt-6 sm:pt-8 pb-12 sm:pb-16">
            <ProjectsHeader />
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-6 sm:pb-8">All Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default ProjectsPage
