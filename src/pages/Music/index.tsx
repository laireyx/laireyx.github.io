import Paragraph from '@components/Paragraph';
import SpotifyPlaylist from '@components/SpotifyPlaylist';
import Title from '@components/Title';
import Vertical from '@components/Vertical';

export default function Music() {
  return (
    <Vertical>
      <Title>Take a seat.</Title>
      <Paragraph>
        How about giving a listen to the music I&apos;m into?
      </Paragraph>
      <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/1DrkyzhwYvtnjdRpcH83bk?utm_source=generator&theme=0" />
    </Vertical>
  );
}
