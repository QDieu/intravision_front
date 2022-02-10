import React from "react";
import styled from "styled-components";
import { EditTaskBarInfoExecutor, EditTaskBarInfoStatus } from "..";
import { getDate } from "../../../../lib";
import { TPriority } from "../../../../types/Priority";
import { TStatus } from "../../../../types/Status";
import { TUser } from "../../../../types/User";

const Wrapper = styled.div`
  width: 15%;
  height: 100%;

  border-left: 1px solid #d7dce0;

  padding-top: 27px;
  padding-left: 27px;

  background-color: #ecf3f7;
`;

const MainInfo = styled.div`
  margin-top: 34px;
`;

const ItemInfo = styled.div`
  margin-top: 24px;

  &:nth-child(1) {
    margin-bottom: 42px;
  }
`;

const Property = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  color: #a09fa8;
`;

const PropValue = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  color: #030303;
`;

const Tag = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 2px;

  padding: 3px 10px;
  border: 2px solid #9da1aa;
  border-radius: 20px;

  background-color: #fff;

  color: #9da1aa;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
`;

type TProps = {
  statuses?: Array<TStatus>;
  initiator?: TUser;
  users?: Array<TUser>;
  priority?: TPriority;
  resolutionDatePlan?: string;
  tags?: Array<{ id: number; name: string }>;
  statusColor?: string;
  statusId?: number;
  executorId?: number;
  changeStatus: (statusId: number) => void;
  changeExecutor: (executorId: number) => void;
};

export const EditTaskBarInfo: React.FC<TProps> = ({
  statuses,
  users,
  initiator,
  priority,
  resolutionDatePlan,
  tags,
  statusId,
  executorId,
  changeExecutor,
  changeStatus,
}) => {
  return (
    <Wrapper>
      <EditTaskBarInfoStatus
        statusId={statusId}
        statuses={statuses}
        changeStatus={changeStatus}
      />
      <MainInfo>
        <ItemInfo>
          <Property>Заявитель</Property>
          <PropValue>{initiator?.name}</PropValue>
        </ItemInfo>

        <ItemInfo>
          <Property>Создана</Property>
          <PropValue>{initiator?.name}</PropValue>
        </ItemInfo>

        <EditTaskBarInfoExecutor
          users={users}
          executorId={executorId}
          changeExecutor={changeExecutor}
        />

        <ItemInfo>
          <Property>Приоритет</Property>
          <PropValue>{priority?.name}</PropValue>
        </ItemInfo>

        <ItemInfo>
          <Property>Срок</Property>
          {resolutionDatePlan && (
            <PropValue>{getDate(resolutionDatePlan)}</PropValue>
          )}
        </ItemInfo>

        <ItemInfo>
          {tags && (
            <>
              <Property>Теги</Property>
              <PropValue>
                {tags.map((item, index) => (
                  <Tag key={item.name + index}>{item.name}</Tag>
                ))}
              </PropValue>
            </>
          )}
        </ItemInfo>
      </MainInfo>
    </Wrapper>
  );
};
