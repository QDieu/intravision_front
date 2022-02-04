import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../../../types/Task';
import { EditTaskBarInfo, EditTaskComment } from '../../atoms';

const Wrapper = styled.div`
    background-color: #ecf3f7;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Main = styled.div`
    padding: 38px;
`;

const Description = styled.div`
    margin-bottom: 55px;
`;

const DescriptionTitle = styled.div`
    color: #9f9ea7;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;

    margin-bottom: 12px;
`;

const DescriptionContent = styled.div`
    display: flex;
    flex-direction: row;

    font-weight: 300;
    font-size: 14px;
    line-height: 18px;

    & p {
        margin: 0 2px;
    }
`;

type TProps = {
    task: ITask;
};

export const EditTaskContent: React.FC<TProps> = ({ task }) => {
    const htmlRef = React.useRef<HTMLDivElement>(null);

    React.useLayoutEffect(() => {
        if (htmlRef.current) htmlRef.current.innerHTML = task.description;
    });

    return (
        <Wrapper>
            <Main>
                <Description>
                    <DescriptionTitle>Описание</DescriptionTitle>
                    <DescriptionContent ref={htmlRef}></DescriptionContent>
                </Description>
                <EditTaskComment comment={task.comment} />
            </Main>
            <EditTaskBarInfo
                initiatorName={task.initiatorName}
                statusColor={task.statusRgb}
                statusName={task.statusName}
                executorName={task.executorName}
                priorityName={task.priorityName}
                resolutionDatePlan={task.resolutionDatePlan}
                tags={task.tags}
            />
        </Wrapper>
    );
};
