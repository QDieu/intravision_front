import React from "react";
import styled from "styled-components";
import { TUser } from "../../../../types/User";

const ItemInfo = styled.div`
  margin-top: 24px;
  cursor: pointer;
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

  color: blue;
`;

const StatusPopup = styled.div`
  position: absolute;

  background-color: #ecf3f7;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  & ul {
    padding-left: 0;
  }

  & ul > li {
    margin: 3px;
    align-items: center;
    display: flex;
    flex-direction: row;
    cursor: pointer;

      padding : 3px;

    &:hover {
    background-color:rgba(0, 191, 255, 0.1););
    }

    & ${PropValue}{
      color : #000;
    }
    
  }
`;

type TProps = {
  executorId?: number;
  users?: Array<TUser>;
  changeExecutor: (executorId: number) => void;
};

export const EditTaskBarInfoExecutor: React.FC<TProps> = ({
  executorId,
  users,
  changeExecutor,
}) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeExecutor, setActiveExecutor] = React.useState(executorId);

  React.useEffect(() => {
    setActiveExecutor(executorId);
  }, [executorId]);

  const onClickHandlerPopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onClickHandlerStatus = (id: number) => {
    setActiveExecutor(id);
    changeExecutor(id);
    setVisiblePopup(false);
  };

  return (
    <>
      {users &&
        users.map((user, index) => {
          if (user.id === activeExecutor) {
            return (
              <ItemInfo onClick={onClickHandlerPopup} key={index}>
                <Property>Исполнитель</Property>
                <PropValue>{user.name}</PropValue>
              </ItemInfo>
            );
          }
          return null;
        })}

      {visiblePopup && (
        <StatusPopup>
          <ul>
            {users &&
              users.map((user,index) => (
                <li onClick={() => onClickHandlerStatus(user.id)} key={index}>
                  <PropValue>{user.name}</PropValue>
                </li>
              ))}
          </ul>
        </StatusPopup>
      )}
    </>
  );
};
