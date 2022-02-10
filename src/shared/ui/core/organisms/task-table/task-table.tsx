import React from "react";
import styled from "styled-components";
import { TPriority } from "../../../../types/Priority";
import { TStatus } from "../../../../types/Status";
import { ITask } from "../../../../types/Task";
import { TUser } from "../../../../types/User";
import { Button } from "../../atoms";
import { TaskTableHead, TaskTableRow } from "../../molecules";

const Wrapper = styled.div`
  padding-top: 22px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & p {
    margin: 0;
  }

  th:nth-child(1) {
    width: 3%;
  }

  th:nth-child(2) {
    width: 5%;
  }

  th:nth-child(3) {
    width: 30%;
  }

  th:nth-child(4) {
    width: 7%;
  }

  th:nth-child(5) {
    width: 55%;
  }

  tr td:nth-child(3) {
    padding-right: 24px;

    & p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &::first-line {
        white-space: none;
      }
    }
  }

  tr td:nth-child(1) {
    padding: 0;
  }

  th,
  td {
    padding-left: 14px;
  }

  td {
    box-sizing: border-box;
    padding: 16px;
    max-height: 55px;
    overflow: hidden;
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
  onEditTask: (index: number) => void;
  users: Array<TUser>;
};

export const TaskTable: React.FC<TProps> = ({
  tasks,
  status,
  priority,
  onTaskCreateForm,
  onEditTask,
  users,
}) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClickButton={onTaskCreateForm} text={"Создать заявку"} />
      </ButtonWrapper>
      <Table>
        <thead>
          <TaskTableHead />
        </thead>
        <tbody>
          {tasks.map((item, index) => {
            return (
              <TaskTableRow
                task={item}
                status={status.find((statusItem) => {
                  return statusItem.id === item.statusId;
                })}
                priority={priority.find((priorityItem) => {
                  return priorityItem.id === item.priorityId;
                })}
                executor={users.find((userItem) => {
                  return userItem.id === item.executorId;
                })}
                onEditTask={onEditTask}
                index={index}
                key={index}
              />
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};
