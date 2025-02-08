import { Endpoints } from '@octokit/types';
import prefetchedProfile from 'prefetch:%VITE_API_URL%/profile';

async function queryGithubProfile() {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/profile`);
  return (await resp.json()) as Endpoints['GET /users/{username}']['response']['data'];
}

queryGithubProfile.initialData = () =>
  prefetchedProfile as Endpoints['GET /users/{username}']['response']['data'];

export default queryGithubProfile;
