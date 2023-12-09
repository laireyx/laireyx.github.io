import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import Avatar from '@components/Avatar';
import Page from '@components/Page';
import Paragraph from '@components/Paragraph';
import Section from '@components/Section';
import Title from '@components/Title';

import queryGithubProfile from '../../queries/profile';

export default function Main() {
  const { data } = useSuspenseQuery({
    queryFn: queryGithubProfile,
    queryKey: ['gh-api', 'profile'],
    initialData: queryGithubProfile.initialData,
  });

  return (
    <Page title="@laireyx">
      <Title>Nice to meet you.</Title>

      <Section>
        <Avatar src={data.avatar_url} name={data.name ?? 'profile image'} />
        <Paragraph>
          I am {data.name}.<br />
          {data.bio}
        </Paragraph>
      </Section>
      <Section>
        <Title size="h3">Contacts</Title>
        <Link to={`mailto:${data.email}`}>{data.email}</Link>
      </Section>
      <Section>
        <Paragraph>
          Vectors and icons by{' '}
          <a
            href="https://www.instagram.com/microstd/?ref=svgrepo.com"
            target="_blank"
            rel="noreferrer"
          >
            Microstd
          </a>{' '}
          and{' '}
          <a href="https://www.svgrepo.com/" target="_blank" rel="noreferrer">
            SVG Repo
          </a>{' '}
          in CC Attribution License via{' '}
          <a href="https://www.svgrepo.com/" target="_blank" rel="noreferrer">
            SVG Repo
          </a>
        </Paragraph>
      </Section>
    </Page>
  );
}
