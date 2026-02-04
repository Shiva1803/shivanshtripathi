const Contact = () => {
  return (
    <section className="mb-12 sm:mb-16" id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">Get in Touch</h2>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-xl">
        If you want to collab or just talk tech, hit me up.
      </p>

      <div className="flex flex-col items-start gap-6 sm:gap-8">
        <a
          href="mailto:shivansht2005@gmail.com"
          className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium hover:text-accent-blue transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white group-hover:text-accent-blue transition-colors flex-shrink-0"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="border-b border-black/30 dark:border-white/30 group-hover:border-accent-blue transition-colors break-all">
            shivansht2005@gmail.com
          </span>
        </a>

        <a
          href="https://x.com/iamShivanshT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded hover:bg-gray-100 transition-colors font-medium border border-gray-200 text-sm sm:text-base"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          Connect on X
        </a>
      </div>
    </section>
  )
}

export default Contact
