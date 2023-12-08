import Page from '@components/Page';
import Paragraph from '@components/Paragraph';
import Section from '@components/Section';
import SpotifyPlaylist from '@components/SpotifyPlaylist';
import Title from '@components/Title';

export default function Music() {
  return (
    <Page title="@laireyx/music">
      <Section>
        <Title>Take a seat.</Title>
        <Paragraph>
          How about giving a listen to the music I&apos;m into?
        </Paragraph>
        <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/1DrkyzhwYvtnjdRpcH83bk?utm_source=generator&theme=0" />
      </Section>
    </Page>
  );
}
