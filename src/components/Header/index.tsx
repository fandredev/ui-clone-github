import React, { useState, FormEvent } from "react";
import { Container, GithubLogo, SearchForm } from "./styles";

import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate("/".concat(search.toLowerCase().trim()));
  }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Enter username or Repo..."
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
