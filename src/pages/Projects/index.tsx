import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import GithubRepo from '@components/GithubRepo';
import Paragraph from '@components/Paragraph';
import Section from '@components/Section';
import Title from '@components/Title';
import Vertical from '@components/Vertical';


import queryGithubProfile from '../../queries/profile';


export default function Projects() {
  const { data: profile } = useSuspenseQuery({
    queryFn: queryGithubProfile,
    queryKey: ['gh-api', 'profile'],
  });

  return (
    <Vertical>
      <Title>Projects</Title>

      <Section>
        <Link to="https://play.google.com/store/apps/details?id=net.miririt.maldivesplayer">
          <Title size="h4">MaldiVes player</Title>
        </Link>
        <Paragraph>Small yet powerful RMMV emulator on Android.</Paragraph>
      </Section>
      <GithubRepo repo="laireyx/react-worker-hooks" />
      <GithubRepo repo="laireyx/mofdb" />

      <Paragraph>
        <Title size="h6">
          See all my {profile.public_repos} projects at:&nbsp;
          <Link to={profile.html_url}>@laireyx</Link>
        </Title>
      </Paragraph>
    </Vertical>
  );
}
