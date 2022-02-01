import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #fff;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  return (
    <Wrapper>
      <IconWrapper>{tab[0]}</IconWrapper>
      <TextWrapper>{tab[1]}</TextWrapper>
    </Wrapper>
  );
};
