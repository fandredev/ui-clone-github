import React from "react";
import ReactLoading from "react-loading";
import { I_LoadingProps } from "../../interfaces";
import { ContainerLoading } from "./styles";
const Loading: React.FC<I_LoadingProps<string, number>> = ({
  color = "#fff",
  height,
  width,
}) => {
  return (
    <ContainerLoading>
      <ReactLoading
        type="spinningBubbles"
        color={color}
        height={height}
        width={width}
      />
    </ContainerLoading>
  );
};
export default Loading;
