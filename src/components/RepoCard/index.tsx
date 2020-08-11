import React from 'react';

import { Container, TopSide, BotSide, RepoIcon, StarIcon, ForkIcon } from './styles';

import { InterfaceRepoCard } from '../../interfaces';

import { Link } from 'react-router-dom';

const RepoCard: React.FC<InterfaceRepoCard<string, number>> = ({
  reponame,
  username,
  description,
  language,
  forks,
  stars,
}) => {
  const languageClass: string = language ? language.toLowerCase() : 'other';
  const replaceRepo: string = reponame.replace(`https://github.com/${username}/`, '');
  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{replaceRepo}</Link>
        </header>
        <p>{description}</p>
      </TopSide>
      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};
export default RepoCard;
