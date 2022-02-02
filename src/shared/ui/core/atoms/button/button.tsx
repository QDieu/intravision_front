import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;

  padding: 10px 19px 12px 19px;
  border-radius: 20px;

  background-color: #008cf0;
  border: 1px solid #008cf0;
  color: #fff;

  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 1px solid #008cf0;
    color: #008cf0;
  }
`;

type TProps = {
  onClickButton: () => void;
  text: string;
};

export const Button: React.FC<TProps> = ({ onClickButton, text }) => {
  return <Wrapper onClick={onClickButton}>{text}</Wrapper>;
};
