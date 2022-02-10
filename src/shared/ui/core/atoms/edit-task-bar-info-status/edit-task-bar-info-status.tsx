import React from "react";
import styled from "styled-components";
import { TStatus } from "../../../../types/Status";

const StatusColor = styled.div<{ statusColor: string | undefined }>`
  width: 12px;
  height: 12px;
  border-radius: 12px;

  background-color: ${({ statusColor }) =>
    statusColor ? statusColor : "#fff"};

  margin-right: 11px;
`;

const StatusText = styled.p`
  color: #525460;
  font-size: 14px;
  line-height: 16px;

  margin: 0;
`;

const Status = styled.div<{ statusColor: string | undefined }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 10px;

  padding: 10px 5px;

  &:hover {
    background-color: ${({ statusColor }) => statusColor};
    cursor: pointer;
  }

  &:hover ${StatusText} {
    color: #fff;
  }
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
    
  }
`;

type TProps = {
  statusId?: number;
  statuses?: Array<TStatus>;
  changeStatus: (statusId: number) => void;
};

export const EditTaskBarInfoStatus: React.FC<TProps> = ({
  statusId,
  statuses,
  changeStatus,
}) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeStatus, setActiveStatus] = React.useState(statusId);

  React.useEffect(() => {
    setActiveStatus(statusId);
  }, [statusId]);

  const onClickHandlerPopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onClickHandlerStatus = (id: number) => {
    setActiveStatus(id);
    changeStatus(id);
    setVisiblePopup(false);
  };

  return (
    <>
      {statuses &&
        statuses.map((item, index) => {
          if (item.id === activeStatus) {
            return (
              <Status
                statusColor={item.rgb}
                onClick={onClickHandlerPopup}
                key={index}
              >
                <StatusColor statusColor={item.rgb} />
                <StatusText>{item.name}</StatusText>
              </Status>
            );
          }
          return null;
        })}

      {visiblePopup && (
        <StatusPopup>
          <ul>
            {statuses &&
              statuses.map((item, index) => (
                <li onClick={() => onClickHandlerStatus(item.id)} key={index}>
                  <StatusColor statusColor={item.rgb} />
                  <StatusText>{item.name}</StatusText>
                </li>
              ))}
          </ul>
        </StatusPopup>
      )}
    </>
  );
};
