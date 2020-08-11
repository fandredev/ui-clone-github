import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { InterfaceHelmetProps } from '../../interfaces';
const SEO: React.FC<InterfaceHelmetProps<string, number>> = ({ name, login, public_repos }) => {
  return (
    <Helmet>
      <title>
        {login} ({name})
      </title>
      <meta
        name="description"
        content={`${name} has ${public_repos} repositories available.Follow their code the
          Github`}
      />
    </Helmet>
  );
};
SEO.propTypes = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  public_repos: PropTypes.number.isRequired,
};
export default SEO;
