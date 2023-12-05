export default async function queryGithubProfile() {
  const resp = await fetch('https://gh-api.laireyx.workers.dev/profile');
  return (await resp.json()) as GithubUserResponse;
}
