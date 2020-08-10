import { I_API_USER, I_API_REPO } from "../@types";

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
export interface I_Data {
  user?: I_API_USER<string, number>;
  repos?: I_API_REPO[];
  error?: string;
}
export interface I_HeaderTheme<ThemeNow> {
  themeName: ThemeNow;
  setThemeName: (newName: ThemeNow) => void;
}
export interface I_LoadingProps<S, N> {
  type?: S;
  color: S;
  height?: N;
  width?: N;
}
