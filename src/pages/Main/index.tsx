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
    initialData: {
      login: 'laireyx',
      id: 82489493,
      node_id: 'MDQ6VXNlcjgyNDg5NDkz',
      avatar_url: 'https://avatars.githubusercontent.com/u/82489493?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/laireyx',
      html_url: 'https://github.com/laireyx',
      followers_url: 'https://api.github.com/users/laireyx/followers',
      following_url:
        'https://api.github.com/users/laireyx/following{/other_user}',
      gists_url: 'https://api.github.com/users/laireyx/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/laireyx/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/laireyx/subscriptions',
      organizations_url: 'https://api.github.com/users/laireyx/orgs',
      repos_url: 'https://api.github.com/users/laireyx/repos',
      events_url: 'https://api.github.com/users/laireyx/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/laireyx/received_events',
      type: 'User',
      site_admin: false,
      name: 'Minsoo Park',
      company: null,
      blog: 'https://laireyx.net',
      location: 'Seoul, Republic of Korea',
      email: 'laireyx@gmail.com',
      hireable: null,
      bio: "I'm having a blast with my fingers dancin on the keyboard.",
      twitter_username: null,
      public_repos: 22,
      public_gists: 0,
      followers: 4,
      following: 5,
      created_at: '2021-04-14T03:54:20Z',
      updated_at: '2023-12-08T17:07:33Z',
    },
    initialDataUpdatedAt: Date.now() - 61 * 1000,
    staleTime: 60 * 1000,
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
