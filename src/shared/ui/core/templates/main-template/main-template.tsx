import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

type TProps = {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    content: React.ReactNode;
};

export const MainTemplate: React.FC<TProps> = ({ sidebar, header, content }) => {
    return (
        <Wrapper>
            {sidebar}
            <Content>
                {header}
                {content}
            </Content>
        </Wrapper>
    );
};
