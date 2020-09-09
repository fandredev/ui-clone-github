export interface ApiUser<S, N> {
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
export interface ApiRepo {
  name: any;
  owner: {
    login: any;
  };
  stargazers_count: any;
  forks: any;
  html_url: any;
  language?: any;
  description?: any;
}
