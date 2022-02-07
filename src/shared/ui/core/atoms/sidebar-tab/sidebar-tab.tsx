import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #fff;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 3px;
`;

const TextWrapper = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
`;

type TProps = {
  tab: [React.ReactNode, string];
};

export const SidebarTab: React.FC<TProps> = ({ tab }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (tab[1] === "Заявки") navigate("/");
    else navigate("/stub", { state: tab[1] });
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <IconWrapper>{tab[0]}</IconWrapper>
      <TextWrapper>{tab[1]}</TextWrapper>
    </Wrapper>
  );
};
