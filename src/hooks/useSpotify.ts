import { useEffect, useState } from 'react';
import { getNowPlaying, getRecentlyPlayed } from '../utils/spotify';

interface SpotifyState {
    isPlaying: boolean;
    songUrl: string;
    title: string;
    artist: string;
    loading: boolean;
}

const useSpotify = () => {
    const [data, setData] = useState<SpotifyState>({
        isPlaying: false,
        songUrl: '',
        title: '',
        artist: '',
        loading: true,
    });

    useEffect(() => {
        const fetchSpotifyData = async () => {
            try {
                const nowPlaying = await getNowPlaying();

                if (nowPlaying && nowPlaying.item) {
                    setData({
                        isPlaying: nowPlaying.is_playing,
                        songUrl: nowPlaying.item.external_urls.spotify,
                        title: nowPlaying.item.name,
                        artist: nowPlaying.item.artists.map((_artist: any) => _artist.name).join(', '),
                        loading: false,
                    });
                } else {
                    const recentlyPlayed = await getRecentlyPlayed();
                    if (recentlyPlayed && recentlyPlayed.items && recentlyPlayed.items.length > 0) {
                        const track = recentlyPlayed.items[0].track;
                        setData({
                            isPlaying: false,
                            songUrl: track.external_urls.spotify,
                            title: track.name,
                            artist: track.artists.map((_artist: any) => _artist.name).join(', '),
                            loading: false,
                        });
                    } else { // Fallback if no recent history found
                        setData(prev => ({ ...prev, loading: false }));
                    }
                }
            } catch (error) {
                console.error('Error fetching Spotify data:', error);
                setData(prev => ({ ...prev, loading: false }));
            }
        };

        fetchSpotifyData();
        // Poll every minute
        const interval = setInterval(fetchSpotifyData, 60000);
        return () => clearInterval(interval);
    }, []);

    return data;
};

export default useSpotify;
