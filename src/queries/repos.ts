import { Endpoints } from '@octokit/types';

export default async function queryGithubRepo(repo: string) {
  const resp = await fetch(
    new URL(`/repos/${repo}`, import.meta.env.VITE_API_URL),
  );
  return (await resp.json()) as Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
}
