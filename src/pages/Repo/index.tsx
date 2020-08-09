import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  GitHubIcon,
  LinkButton,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/flubyGit"}>
          flubyGit
        </Link>
        <span>/</span>
        <Link className={"repo-name"} to={"/flubyGit/typescript"}>
          typescript
        </Link>
      </Breadcrumb>
      <p>Typescript Lessons</p>
      <Stats>
        <ul>
          <li>
            <StarIcon />
            <b>9</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>0</b>
            <span>forks</span>
          </li>
        </ul>
      </Stats>
      <LinkButton href={"https://github.com/flubyGit/typescript"}>
        <GitHubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
