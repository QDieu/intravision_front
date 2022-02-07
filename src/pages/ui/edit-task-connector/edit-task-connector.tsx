import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { TAppState } from "../../../features/redux/store";
import { updateTask } from "../../../features/redux/task-reducer";
import { EditTask } from "./../../../shared/ui/core/organisms";

type MyState = {
  index: number;
};

export const EditTaskConnector: React.FC<{}> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = location.state as MyState;
  const index = state.index;
  const { task, users, statuses, priorities } = useSelector(
    (state: TAppState) => ({
      task: state.task.tasks,
      users: state.users.users,
      statuses: state.statuses.statuses,
      priorities: state.priorities.priorities,
    })
  );

  const onCloseEditForm = () => {
    navigate("/");
  };

  const addComment = (comment: string) => {
    task[index].comment = comment;
    dispatch(updateTask(task[index]));
  };

  const changeStatus = (statusId: number) => {
    statuses.map((item) => {
      if (item.id === statusId) {
        task[index].statusId = item.id;
        task[index].statusName = item.name;
        task[index].statusRgb = item.rgb;
      }
    });
    dispatch(updateTask(task[index]));
  };

  const changeExecutor = (executorId: number) => {
    users.map((item) => {
      if (item.id === executorId) {
        task[index].executorId = item.id;
        task[index].executorName = item.name;
      }
    });
    dispatch(updateTask(task[index]));
  };

  return (
    <EditTask
      task={task[index]}
      onCloseEditForm={onCloseEditForm}
      addComment={addComment}
      users={users}
      statuses={statuses}
      priorities={priorities}
      changeStatus={changeStatus}
      changeExecutor={changeExecutor}
    />
  );
};
