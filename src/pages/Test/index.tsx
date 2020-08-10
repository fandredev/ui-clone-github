import React from "react";
import { useFetch } from "../../hooks/useFetch";

interface I_Props {
  id: number;
  login: string;
}

const Test: React.FC = () => {
  const { data } = useFetch<I_Props>("https://api.github.com/users/flubyGit");
  return <>My name Github: {data?.login}</>;
};
export default Test;
