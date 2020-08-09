import React, { useEffect, useState } from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

import { useParams } from "react-router-dom";
import { API_GITHUB, USER_DEFAULT } from "../../enums";
import { I_Data } from "../../interfaces";

const Profile: React.FC = () => {
  const { username = USER_DEFAULT.Name } = useParams();
  const [data, setData] = useState<I_Data>();

  useEffect(() => {
    Promise.all([
      fetch(`${API_GITHUB.Resources}${username}`),
      fetch(`${API_GITHUB.Resources}${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: " User not Found" });
        return;
      }
      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const randomRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = randomRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const {
    user: {
      public_repos,
      avatar_url,
      name,
      followers,
      following,
      blog,
      email,
      company,
      location,
      login,
    },
    repos,
  } = data;

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{public_repos}</span>
    </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={login}
            name={name}
            avatarUrl={avatar_url}
            follow={followers}
            following={following}
            company={company}
            location={location}
            email={email}
            blog={blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {repos.map(
                ({
                  name,
                  owner: { login },
                  description,
                  stargazers_count,
                  language,
                  forks,
                  html_url,
                }) => (
                  <RepoCard
                    key={name}
                    username={login}
                    reponame={html_url}
                    description={description}
                    language={language}
                    stars={stargazers_count}
                    forks={forks}
                  />
                )
              )}
            </div>
          </Repos>
          <CalendarHeading>
            Random calender (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
