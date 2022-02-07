import React from "react";
import styled from "styled-components";
import { TPriority } from "../../../../types/Priority";
import { TStatus } from "../../../../types/Status";
import { ITask } from "../../../../types/Task";
import { TUser } from "../../../../types/User";
import { EditTaskBarInfo, EditTaskComment } from "../../atoms";

const Wrapper = styled.div`
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
  priorities: Array<TPriority>;
  statuses: Array<TStatus>;
  users: Array<TUser>;
  addComment: (value: string) => void;
  changeStatus: (statusId: number) => void;
  changeExecutor: (executorId: number) => void;
};

export const EditTaskContent: React.FC<TProps> = ({
  task,
  addComment,
  priorities,
  statuses,
  users,
  changeExecutor,
  changeStatus,
}) => {
  const htmlRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (htmlRef.current && task.description)
      htmlRef.current.innerHTML = task.description;
  });

  return (
    <Wrapper>
      <Main>
        <Description>
          <DescriptionTitle>Описание</DescriptionTitle>
          <DescriptionContent ref={htmlRef}></DescriptionContent>
        </Description>
        <EditTaskComment comment={task.comment} addComment={addComment} />
      </Main>
      <EditTaskBarInfo
        initiator={users.find((userItem) => {
          return userItem.id === task.initiatorId;
        })}
        resolutionDatePlan={task.resolutionDatePlan}
        tags={task.tags}
        statuses={statuses}
        statusId={task.statusId}
        priority={priorities.find((priorityItem) => {
          return priorityItem.id === task.priorityId;
        })}
        users={users}
        executorId={task.executorId}
        changeStatus={changeStatus}
        changeExecutor={changeExecutor}
      />
    </Wrapper>
  );
};
