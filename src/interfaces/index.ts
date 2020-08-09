export interface I_ProfileData<S, N, U> {
  username: S;
  name: S;
  avatarUrl: S;
  follow: N;
  following: N;
  company?: S;
  location?: S;
  email?: S;
  blog?: S | U;
}

export interface I_RepoCard<S, N> {
  username: S;
  reponame: S;
  description?: S;
  language?: S;
  stars: N;
  forks: N;
}
