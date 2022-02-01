import React from "react";
import styled from "styled-components";
import { Icons } from "../../../icons";

const Wrapper = styled.div`
  padding: 8px 10px 8px 20px;
  width: 40%;

  display: flex;
  justify-content: space-between;

  border: 1px solid #a9b2c9;
  border-radius: 14px;

  box-shadow: inset -1px 0px 12px rgba(0, 0, 0, 0.07);

  &:hover {
    box-shadow: 0px 0px 10px rgb(0, 140, 240, 0.2);
  }

  &:focus-within {
    border: 1px solid #42aaff;
  }
`;

const InputWrapper = styled.input`
  border: none;
  width: 100%;

  font-size: 16px;
  line-height: 19px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #c0cbda;
  }

  margin-right: 8px;
`;

type TProps = {};

export const HeaderSearchInput: React.FC<TProps> = ({}) => {
  return (
    <Wrapper>
      <InputWrapper placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки" />
      <Icons.Loop />
    </Wrapper>
  );
};
