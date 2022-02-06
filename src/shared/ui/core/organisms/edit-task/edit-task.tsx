import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../../../types/Task';
import { EditTaskHeader } from '../../atoms';
import { EditTaskContent } from '../../molecules';

const Wrapper = styled.div`
    position: fixed;

    top: 65px;
    right: 0;

    width: 60%;
    height: 100%;

    background-color: #ecf3f7;
`;

type TProps = {
    task: ITask;
    onCloseEditForm: () => void;
    addComment: (value: string) => void;
};

export const EditTask: React.FC<TProps> = ({ task, onCloseEditForm, addComment }) => {
    return (
        <Wrapper>
            <EditTaskHeader id={task.id} taskName={task.name} onCloseEditForm={onCloseEditForm} />
            <EditTaskContent task={task} addComment={addComment} />
        </Wrapper>
    );
};
