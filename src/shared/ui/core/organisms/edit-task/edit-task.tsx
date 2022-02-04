import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../../../types/Task';
import { EditTaskHeader } from '../../atoms';
import { EditTaskContent } from '../../molecules';

const Wrapper = styled.div``;

type TProps = {
    task: ITask;
};

export const EditTask: React.FC<TProps> = ({ task }) => {
    return (
        <Wrapper>
            <EditTaskHeader id={task.id} taskName={task.name} />
            <EditTaskContent task={task} />
        </Wrapper>
    );
};
