import { Endpoints } from '@octokit/types';

export default async function queryGithubRepo(repo: string) {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/repos/${repo}`);
  return (await resp.json()) as Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
}
