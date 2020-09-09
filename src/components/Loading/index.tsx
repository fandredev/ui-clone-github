import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingProps } from '../../interfaces';
import { ContainerLoading } from './styles';
import PropTypes from 'prop-types';
const Loading: React.FC<LoadingProps<string, number>> = ({ color = '#fff', height, width }) => {
  return (
    <ContainerLoading>
      <ReactLoading type="spinningBubbles" color={color} height={height} width={width} />
    </ContainerLoading>
  );
};
Loading.defaultProps = {
  type: 'spinningBubbles',
  height: 150,
  width: 150,
};

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};
export default Loading;
