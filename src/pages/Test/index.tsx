import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { InterfacePropsTest } from '../../interfaces';
const Test: React.FC = () => {
  const { data } = useFetch<InterfacePropsTest<number, string>>('users/flubyGit');
  return <>My name Github: {data?.login}</>;
};
export default Test;
