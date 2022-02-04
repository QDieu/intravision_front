import React from 'react';
import styled from 'styled-components';
import { HeaderSearchInput } from '../../atoms';

const Wrapper = styled.div`
    width: 100vw;
    height: 65px;
    background-color: #d1e0ed;

    box-sizing: border-box;
    padding: 16px 0 0 16px;
`;

type TProps = {};

export const Header: React.FC<TProps> = ({}) => {
    return (
        <Wrapper>
            <HeaderSearchInput />
        </Wrapper>
    );
};
