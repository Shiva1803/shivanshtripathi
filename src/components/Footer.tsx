import useSpotify from '../hooks/useSpotify';

const Footer = () => {
  const { isPlaying, songUrl, title, artist, loading } = useSpotify();

  return (
    <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 pb-6 sm:pb-8 border-t border-gray-300 dark:border-light-gray text-xs sm:text-sm text-gray-600 dark:text-secondary-gray max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 w-full">
        <span>&copy; 2025 - 2026<br /><a href="/" className="underline hover:text-black dark:hover:text-white transition-colors">Shivansh Tripathi</a></span>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider mb-1 text-black/50 dark:text-white/50">Legal</span>
          <a href="/privacy-policy" className="hover:text-black dark:hover:text-white transition-colors underline">Privacy Policy</a>
        </div>

        <a href="/sitemap.xml" className="hover:text-black dark:hover:text-white transition-colors underline">Sitemap</a>

        <a href="#" className="hover:text-black dark:hover:text-white transition-colors underline">Github</a>

        <div className="flex flex-col items-start md:items-end w-full md:w-auto">
          <p className="text-xs mb-1 text-black/50 dark:text-white/50">
            {loading ? 'Loading Spotify...' : isPlaying ? 'Listening to:' : 'Last listened to:'}
          </p>
          <div className="flex items-center gap-2 w-full md:w-auto">
            {isPlaying && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></span>}
            {!loading && songUrl ? (
              <a
                href={songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white font-medium hover:underline truncate max-w-[250px] sm:max-w-[200px]"
                title={`${title} by ${artist}`}
              >
                {title} <span className="text-gray-600 dark:text-secondary-gray font-normal">by</span> {artist}
              </a>
            ) : (
              <p className="text-black dark:text-white font-medium">Not playing anything</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
