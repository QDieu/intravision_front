import React from 'react';
import styled from 'styled-components';
import { TPriority } from '../../../../types/Priority';
import { TStatus } from '../../../../types/Status';
import { ITask } from '../../../../types/Task';
import { PriorityLine, StatusButton } from '../../atoms';

const Wrapper = styled.tr`
    border-bottom: 1px solid #eef1f4;

    cursor: pointer;

    transition: 0.3s;
    &:hover {
        background-color: rgba(0, 191, 255, 0.1);
    }
`;

const TextWrapper = styled.p`
    color: #525460;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    text-overflow: ellipsis;
`;

type TProps = {
    priority?: TPriority;
    task: ITask;
    status?: TStatus;
    onEditTask: (task: ITask) => void;
};

export const TaskTableRow: React.FC<TProps> = ({ priority, status, task, onEditTask }) => {
    const onClickHandler = () => {
        onEditTask(task);
    };

    return (
        <Wrapper onClick={onClickHandler}>
            <td>
                <PriorityLine priority={priority} />
            </td>
            <td>
                <TextWrapper>{task.id}</TextWrapper>
            </td>
            <td>
                <TextWrapper>{task.name}</TextWrapper>
            </td>
            <td>
                <StatusButton status={status} />
            </td>
            <td>
                <TextWrapper>{task.executorName}</TextWrapper>
            </td>
        </Wrapper>
    );
};
