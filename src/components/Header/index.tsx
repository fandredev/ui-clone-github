import React, { useState, FormEvent } from 'react';
import { Container, GithubLogo, SearchForm } from './styles';

import { useNavigate } from 'react-router-dom';

import { HeaderTheme } from '../../interfaces';
import { ThemeName } from '../../styles/Themes';
import PropTypes from 'prop-types';

const Header: React.FC<HeaderTheme<ThemeName>> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate('/'.concat(search.toLowerCase().trim()));
  }
  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
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

Header.propTypes = {
  themeName: PropTypes.any.isRequired,
  setThemeName: PropTypes.func.isRequired,
};

export default Header;
