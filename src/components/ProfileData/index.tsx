import React from 'react';

import { InterfaceProfileData } from '../../interfaces';
import PropTypes from 'prop-types';
import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles';

const ProfileData: React.FC<InterfaceProfileData<string, number, undefined>> = ({
  username,
  name,
  avatarUrl,
  following,
  company,
  location,
  email,
  blog,
  follow,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt="Username" />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>Followers</b>
          {follow}
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>Following</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

ProfileData.defaultProps = {
  company: '',
  location: 'São Paulo',
  email: '',
  blog: '',
};
ProfileData.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  follow: PropTypes.number.isRequired,
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
};
export default ProfileData;
