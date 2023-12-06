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
  });

  return (
    <Vertical>
      <Title>Take a seat.</Title>
      <Avatar src={data.avatar_url} />
      <Paragraph>Nice to meet you. I am {data.name}.</Paragraph>
      <Section>
        <Title size="h3">Summary</Title>
        <Paragraph>
          2018.03 - 2024.02: Hanyang Univ. Dept. of CSE
          <br />
          2022.06 - 2022.08: KIST Intern
          <br />
          2024.12 - : NAVER
        </Paragraph>
      </Section>
      <Section>
        <Title size="h3">Contacts</Title>
        <Link to="mailto:laireyx@gmail.com">laireyx@gmail.com</Link>
      </Section>
    </Vertical>
  );
}
