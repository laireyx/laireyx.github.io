import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import Avatar from '@components/Avatar';
import Paragraph from '@components/Paragraph';
import Section from '@components/Section';
import Title from '@components/Title';
import Vertical from '@components/Vertical';

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
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 21,
      public_gists: 0,
      followers: 4,
      following: 5,
      created_at: '2021-04-14T03:54:20Z',
      updated_at: '2023-12-06T14:14:26Z',
    },
    initialDataUpdatedAt: 0,
  });

  return (
    <Vertical>
      <Title>Take a seat.</Title>
      <Avatar src={data.avatar_url} alt="profile image" />
      <Paragraph>Nice to meet you. I am {data.name}.</Paragraph>
      <Section>
        <Title size="h3">Summary</Title>
        <Paragraph>
          2018.03 - 2024.02: Hanyang Univ. Dept. of CSE
          <br />
          2022.06 - 2022.08: KIST Intern
          <br />
          2023.12 - : NAVER
        </Paragraph>
      </Section>
      <Section>
        <Title size="h3">Contacts</Title>
        <Link to="mailto:laireyx@gmail.com">laireyx@gmail.com</Link>
      </Section>
    </Vertical>
  );
}
