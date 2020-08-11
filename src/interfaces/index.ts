import { ApiRepo } from '../@types';

export interface InterfaceProfileData<S, N, U> {
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

export interface InterfaceRepoCard<S, N> {
  username: S;
  reponame: S;
  description?: S;
  language?: S;
  stars: N;
  forks: N;
}
export interface InterfaceData {
  repos?: ApiRepo[];
  error?: string;
}
export interface HeaderTheme<ThemeNow> {
  themeName: ThemeNow;
  setThemeName: (newName: ThemeNow) => void;
}
export interface LoadingProps<S, N> {
  type?: S;
  color: S;
  height?: N;
  width?: N;
}
export interface InterfaceHelmetProps<S, N> {
  login: S;
  name: S;
  // eslint-disable-next-line camelcase
  public_repos: N;
}
export interface InterfacePropsTest<N, S> {
  id: N;
  login: S;
}
