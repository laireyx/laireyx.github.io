import { Endpoints } from '@octokit/types';

async function queryGithubProfile() {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/profile`);
  return (await resp.json()) as Endpoints['GET /users/{username}']['response']['data'];
}

queryGithubProfile.initialData = () => {
  if (import.meta.env.VITE_PREFETCHED_PROFILE) {
    console.log('use prefetched');
    return JSON.parse(
      import.meta.env.VITE_PREFETCHED_PROFILE,
    ) as Endpoints['GET /users/{username}']['response']['data'];
  } else {
    return {
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
    };
  }
};

export default queryGithubProfile;
