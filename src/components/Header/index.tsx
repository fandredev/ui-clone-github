import React, { useState, FormEvent } from "react";
import { Container, GithubLogo, SearchForm } from "./styles";

import { useNavigate } from "react-router-dom";

import { I_HeaderTheme } from "../../interfaces";
import { ThemeName } from "../../styles/Themes";

const Header: React.FC<I_HeaderTheme<ThemeName>> = ({
  themeName,
  setThemeName,
}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate("/".concat(search.toLowerCase().trim()));
  }
  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
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
