import { useMemo } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import Paragraph from '@components/Paragraph';
import Section from '@components/Section';
import Title from '@components/Title';

import queryGithubRepo from '../../queries/repos';

interface GithubRepoProps {
  repo: string;
}

export default function GithubRepo({ repo }: GithubRepoProps) {
  const { data } = useSuspenseQuery({
    queryFn: () => queryGithubRepo(repo),
    queryKey: ['gh-api', 'repo', repo],
  });

  const updatedTime = useMemo(() => {
    const dtf = new Intl.DateTimeFormat(['ko-KR'], {
      dateStyle: 'short',
      timeStyle: 'short',

      hourCycle: 'h24',
    });
    return dtf.format(new Date(data.updated_at));
  }, [data]);

  return (
    <Section>
      <Title size="h4">
        <Link to={data.homepage ?? data.html_url}>{data.name}</Link>
      </Title>

      <Paragraph>
        Last update: {updatedTime}
        <br />
        {data.description}
      </Paragraph>
    </Section>
  );
}
