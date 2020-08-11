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
import SEO from "../../components/Helmet";
import Loading from "../../components/Loading";

import { useParams } from "react-router-dom";
import { API_GITHUB, USER_DEFAULT, LOADING_PROPS } from "../../enums";

import { I_Data } from "../../interfaces";

import { useFetch } from "../../hooks/useFetch";

import { I_API_USER } from "../../@types";

const Profile: React.FC = () => {
  const { username = USER_DEFAULT.Name } = useParams();
  const [data, setData] = useState<I_Data>();

  const { data: users } = useFetch<I_API_USER<string, number>>(`${username}`);
  console.log(users, "Usuários");

  useEffect(() => {
    Promise.all([fetch(`${API_GITHUB.Resources}${username}/repos`)]).then(
      async (responses) => {
        const [reposResponse] = responses;
        const repos = await reposResponse.json();

        const randomRepos = repos.sort(() => 0.5 - Math.random());
        const slicedRepos = randomRepos.slice(0, 6);

        setData({
          repos: slicedRepos,
        });
      }
    );
  }, [username]);

  if (!users || !data?.repos)
    return <Loading type={LOADING_PROPS.Type} color={LOADING_PROPS.Color} />;

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{users?.public_repos}</span>
    </div>
  );
  return (
    <Container>
      <SEO
        login={users?.login}
        name={users?.name}
        public_repos={users?.public_repos}
      />
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
            username={users?.login}
            name={users?.name}
            avatarUrl={users?.avatar_url}
            follow={users?.followers}
            following={users?.following}
            company={users?.company}
            location={users?.location}
            email={users?.email}
            blog={users?.blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Repos</h2>
            <div>
              {data?.repos.map(
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
