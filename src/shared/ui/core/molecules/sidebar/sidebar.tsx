import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../../icons';
import { SidebarTab } from '../../atoms';

const Wrapper = styled.div`
    height: 100vh;
    background-color: #002137;
    width: 95px;

    padding-top: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

type TProps = {
    tabs?: Array<[React.ReactNode, string]>;
};

//mock tabs
const mockTabs: Array<[React.ReactNode, string]> = [
    [<Icons.Book />, 'База знаний'],
    [<Icons.Document />, 'Заявки'],
    [<Icons.People />, 'Сотрудники'],
    [<Icons.Build />, 'Клиенты'],
    [<Icons.Presentation />, 'Активы'],
    [<Icons.Option />, 'Настройки'],
];

export const Sidebar: React.FC<TProps> = ({ tabs }) => {
    return (
        <Wrapper>
            {tabs
                ? tabs.map((item) => <SidebarTab tab={item} />)
                : mockTabs.map((item) => <SidebarTab tab={item} />)}
        </Wrapper>
    );
};
