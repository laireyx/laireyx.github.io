import { Endpoints } from '@octokit/types';

export default async function queryGithubProfile() {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/profile`);
  return (await resp.json()) as Endpoints['GET /users/{username}']['response']['data'];
}
