import React from "react";
import Helmet from "react-helmet";

import { I_HelmetProps } from "../../interfaces";
const SEO: React.FC<I_HelmetProps<string, number>> = ({
  name,
  login,
  public_repos,
}) => {
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

export default SEO;
