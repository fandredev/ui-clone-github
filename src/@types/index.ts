export interface I_API_USER<S, N> {
  login: S;
  name: S;
  followers: N;
  following: N;
  blog?: S;
  public_repos: N;
  avatar_url: S;
  company?: S;
  email?: S;
  location?: S;
}
export interface I_API_REPO {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}
