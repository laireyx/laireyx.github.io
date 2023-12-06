import { useEffect, useState } from 'react';

import {
  spotifyPlaylistLoadingStyle,
  spotifyPlaylistStyle,
  spotifyPlaylistWrapperStyle,
} from './index.css';

interface SpotifyPlaylistProps {
  src: string;
}

export default function SpotifyPlaylist({ src }: SpotifyPlaylistProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className={spotifyPlaylistWrapperStyle}>
      <iframe
        className={loaded ? spotifyPlaylistStyle : spotifyPlaylistLoadingStyle}
        src={src}
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      ></iframe>
    </div>
  );
}
