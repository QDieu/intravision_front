import React from "react";
import styled from "styled-components";

const Wrapper = styled.tr`
  width: 100%;
  border-bottom: 1px solid #eef1f4;

  text-align: left;
`;

const TextWrapper = styled.p`
  margin: 0;
  margin-bottom: 16px;

  border-right: 1px solid #e2e7ea;

  color: #404147;
  font-size: 16px;
  line-height: 18px;
`;

export const TaskTableHead: React.FC<{}> = () => {
  return (
    <Wrapper>
      <th>{/*Приоритет*/}</th>
      <th>
        <TextWrapper>{"ID"}</TextWrapper>
      </th>
      <th>
        <TextWrapper>{"Название"}</TextWrapper>
      </th>
      <th>
        <TextWrapper>{"Статус"}</TextWrapper>
      </th>
      <th>
        <TextWrapper>{"Исполнитель"}</TextWrapper>
      </th>
    </Wrapper>
  );
};
