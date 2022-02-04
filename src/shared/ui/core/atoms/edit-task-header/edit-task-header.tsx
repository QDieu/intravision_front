import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../../icons';

const Wrapper = styled.div`
    box-sizing: border-box;
    height: 60px;
    background-color: #1a4876;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 6px 32px 12px 36px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
`;

const HeaderId = styled.div`
    color: #fff;
    font-size: 18px;
    line-height: 20px;

    margin-right: 16px;

    display: flex;
    align-items: center;
`;

const HeaderTitle = styled.div`
    color: #fff;
    font-size: 16px;
    line-height: 22px;

    box-sizing: border-box;
    max-width: 550px;
`;

type TProps = {
    id: number;
    taskName: string;
};

export const EditTaskHeader: React.FC<TProps> = ({ id, taskName }) => {
    return (
        <Wrapper>
            <Header>
                <HeaderId>{id}</HeaderId>
                <HeaderTitle>{taskName}</HeaderTitle>
            </Header>
            <Icons.Close />
        </Wrapper>
    );
};
