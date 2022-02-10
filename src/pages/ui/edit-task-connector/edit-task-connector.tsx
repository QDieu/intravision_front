import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { TAppState } from "../../../features/redux/store";
import {
  fetchCurrentTask,
  updateTask,
} from "../../../features/redux/task-reducer";
import { EditTask } from "./../../../shared/ui/core/organisms";

export const EditTaskConnector: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const taskId = useParams().taskId;

  const { currentTask, users, statuses, priorities, tenatid } = useSelector(
    (state: TAppState) => ({
      currentTask: state.task.currentTask,
      users: state.users.users,
      statuses: state.statuses.statuses,
      priorities: state.priorities.priorities,
      tenatid: state.app.Tenatguid,
    })
  );

  React.useEffect(() => {
    dispatch(fetchCurrentTask(tenatid, taskId));
  }, [tenatid, taskId]);

  const onCloseEditForm = () => {
    navigate("/");
  };

  const addComment = (comment: string) => {
    currentTask.comment = comment;
    dispatch(updateTask(currentTask));
  };

  const changeStatus = (statusId: number) => {
    statuses.map((item) => {
      if (item.id === statusId) {
        currentTask.statusId = item.id;
        currentTask.statusName = item.name;
        currentTask.statusRgb = item.rgb;
      }
    });
    dispatch(updateTask(currentTask));
  };

  const changeExecutor = (executorId: number) => {
    users.map((item) => {
      if (item.id === executorId) {
        currentTask.executorId = item.id;
        currentTask.executorName = item.name;
      }
    });
    dispatch(updateTask(currentTask));
  };

  return (
    <EditTask
      task={currentTask}
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
