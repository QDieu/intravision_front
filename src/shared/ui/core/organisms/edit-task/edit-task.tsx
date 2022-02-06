import React from 'react';
import styled from 'styled-components';
import { TPriority } from '../../../../types/Priority';
import { TStatus } from '../../../../types/Status';
import { ITask } from '../../../../types/Task';
import { TUser } from '../../../../types/User';
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
    priorities: Array<TPriority>;
    statuses: Array<TStatus>;
    users: Array<TUser>;
    onCloseEditForm: () => void;
    addComment: (value: string) => void;
};

export const EditTask: React.FC<TProps> = ({
    task,
    onCloseEditForm,
    addComment,
    statuses,
    users,
    priorities,
}) => {
    return (
        <Wrapper>
            <EditTaskHeader id={task.id} taskName={task.name} onCloseEditForm={onCloseEditForm} />
            <EditTaskContent
                task={task}
                addComment={addComment}
                statuses={statuses}
                users={users}
                priorities={priorities}
            />
        </Wrapper>
    );
};
