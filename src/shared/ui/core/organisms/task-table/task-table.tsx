import React from 'react';
import styled from 'styled-components';
import { TPriority } from '../../../../types/Priority';
import { TStatus } from '../../../../types/Status';
import { ITask } from '../../../../types/Task';
import { Button } from '../../atoms';
import { TaskTableHead, TaskTableRow } from '../../molecules';

const Wrapper = styled.div`
    padding-top: 22px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th:nth-child(1) {
        width: 3%;
    }

    th:nth-child(2) {
        width: 7%;
    }

    th:nth-child(3) {
        width: 30%;
    }

    th:nth-child(4) {
        width: 7%;
    }

    th:nth-child(5) {
        width: 53%;
    }

    tr td:nth-child(3) {
        padding-right: 24px;
    }

    th,
    td {
        padding-left: 14px;
    }
`;

const ButtonWrapper = styled.div`
    padding-left: 220px;

    margin-bottom: 21px;
`;

type TProps = {
    tasks: Array<ITask>;
    status: Array<TStatus>;
    priority: Array<TPriority>;
    onTaskCreateForm: () => void;
    onEditTask: (task: ITask) => void;
};

export const TaskTable: React.FC<TProps> = ({
    tasks,
    status,
    priority,
    onTaskCreateForm,
    onEditTask,
}) => {
    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClickButton={onTaskCreateForm} text={'Создать заявку'} />
            </ButtonWrapper>
            <Table>
                <TaskTableHead />
                {tasks.map((item) => (
                    <TaskTableRow
                        task={item}
                        status={status.find((statusItem) => {
                            return statusItem.name === item.statusName;
                        })}
                        priority={priority.find((priorityItem) => {
                            return priorityItem.name === item.priorityName;
                        })}
                        onEditTask={onEditTask}
                    />
                ))}
            </Table>
        </Wrapper>
    );
};
