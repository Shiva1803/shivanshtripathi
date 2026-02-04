import ProjectsHeader from './ProjectsHeader'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pt-8 pb-16">
            <ProjectsHeader />
            <div className="max-w-4xl mx-auto px-6 text-black dark:text-text-light">
                <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-8">Privacy Policy</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">Your Privacy on This Website</h2>
                        <p className="mb-4 text-gray-600 dark:text-secondary-gray">
                            Your privacy is important, and this site is designed to operate without collecting any personal information.
                            No cookies, trackers, analytics tools, or background scripts are used.
                            Nothing about your visit, including your IP address, browser details, or activity is stored or logged.
                        </p>
                        <p className="mb-2 text-gray-600 dark:text-secondary-gray">This means:</p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-secondary-gray ml-4 space-y-1">
                            <li>No profiling</li>
                            <li>No tracking across the web</li>
                            <li>No data shared with third parties</li>
                        </ul>
                        <p className="mt-4 text-gray-600 dark:text-secondary-gray">Your visit remains completely anonymous.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">Security & Data Transmission</h2>
                        <p className="mb-4 text-gray-600 dark:text-secondary-gray">
                            This site uses HTTPS encryption, ensuring that all information sent between your device and the server stays protected.
                            While your internet provider can see that you connected to this domain, the actual content of the pages you view cannot be read.
                        </p>
                        <p className="mb-2 text-gray-600 dark:text-secondary-gray">HTTPS also reduces the risk of:</p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-secondary-gray ml-4 space-y-1">
                            <li>Traffic interception on public networks</li>
                            <li>Content modification or injection by intermediaries</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">Links to External Websites</h2>
                        <p className="text-gray-600 dark:text-secondary-gray">
                            Some pages may link to external platforms such as GitHub, LinkedIn, or project demos.
                            These sites are operated independently and may collect data according to their own privacy policies.
                            Please review their policies if you choose to visit them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">Contact Information</h2>
                        <p className="text-gray-600 dark:text-secondary-gray mb-1">Shivansh Tripathi</p>
                        <p className="text-gray-600 dark:text-secondary-gray mb-4">Jaipur, IN</p>
                        <p className="text-gray-600 dark:text-secondary-gray">
                            For questions or concerns about this policy, you can reach me at: <br />
                            <a href="mailto:your-email@example.com" className="text-accent-blue hover:underline">shivansht2005@gmail.com</a>
                        </p>
                    </section>

                    <div className="pt-8 border-t border-black/10 dark:border-white/10 text-sm text-gray-600 dark:text-secondary-gray text-right">
                        <p className="font-semibold text-black/70 dark:text-white/70">Policy Version</p>
                        <p>Updated: Jan 30, 2026</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
