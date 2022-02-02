import React from "react";
import styled from "styled-components";
import { TPriority } from "../../../../types/Priority";
import { TStatus } from "../../../../types/Status";
import { PriorityLine, StatusButton } from "../../atoms";

const Wrapper = styled.tr`
  border-bottom: 1px solid #eef1f4;
`;

const TextWrapper = styled.p`
  color: #525460;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  text-overflow: ellipsis;
`;

type TProps = {
  priority?: TPriority;
  id: number;
  name: string;
  executor: string;
  status?: TStatus;
};

export const TaskTableRow: React.FC<TProps> = ({
  priority,
  id,
  name,
  status,
  executor,
}) => {
  return (
    <Wrapper>
      <td>
        <PriorityLine priority={priority} />
      </td>
      <td>
        <TextWrapper>{id}</TextWrapper>
      </td>
      <td>
        <TextWrapper>{name}</TextWrapper>
      </td>
      <td>
        <StatusButton status={status} />
      </td>
      <td>
        <TextWrapper>{executor}</TextWrapper>
      </td>
    </Wrapper>
  );
};
