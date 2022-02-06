import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    padding-left: 95px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

type TProps = {
    header: React.ReactNode;
    content: React.ReactNode;
};

export const MainTemplate: React.FC<TProps> = ({ header, content }) => {
    return (
        <Wrapper>
            <Content>
                {header}
                {content}
            </Content>
        </Wrapper>
    );
};
