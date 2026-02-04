import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import FeaturedBlogs from './FeaturedBlogs'
import Contact from './Contact'

const Home = () => {
    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <Projects />
                <Skills />
                <FeaturedBlogs />
                <Education />
                <Contact />
            </main>
        </>
    )
}

export default Home
