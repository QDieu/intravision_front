import React from "react";
import styled from "styled-components";
import { TPriority } from "../../../../types/Priority";

const Wrapper = styled.div<{ rgb: string }>`
  width: 5px;
  height: 50px;

  border-radius: 3px;
  background-color: ${({ rgb }) => rgb};
`;

type TProps = {
  priority?: TPriority;
};

export const PriorityLine: React.FC<TProps> = ({ priority }) => {
  return priority ? <Wrapper rgb={priority.rgb}></Wrapper> : null;
};
