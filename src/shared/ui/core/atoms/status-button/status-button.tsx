import React from "react";
import styled from "styled-components";
import { TStatus } from "../../../../types/Status";

const Wrapper = styled.div<{ rgb: string }>`
  background: ${({ rgb }) => rgb};
  padding: 8px 16px;
  border-radius: 20px;

  display: inline-block;

  color: #fff;
`;

type TProps = {
  status?: TStatus;
};

export const StatusButton: React.FC<TProps> = ({ status }) => {
  return status ? (
    <Wrapper rgb={status.rgb}>{status.name.toLocaleLowerCase()}</Wrapper>
  ) : null;
};
