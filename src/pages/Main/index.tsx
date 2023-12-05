import { useSuspenseQuery } from '@tanstack/react-query';

import Avatar from '@components/Avatar';
import Paragraph from '@components/Paragraph';
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
      <Avatar imgUrl={data.avatar_url} />
      <Paragraph>Nice to meet you. I am {data.name}.</Paragraph>
    </Vertical>
  );
}
