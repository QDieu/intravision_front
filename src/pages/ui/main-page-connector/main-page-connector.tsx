import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { TAppState } from "../../../features/redux/store";
import { MainPage } from "../../../shared/ui/core/pages";

export const MainPageConnector: React.FC<{}> = () => {
  // const dispatch = useDispatch();
  const { tasks, priorities, statuses, users } = useSelector(
    (state: TAppState) => {
      return {
        tasks: state.task.tasks,
        priorities: state.priorities.priorities,
        statuses: state.statuses.statuses,
        users: state.users.users,
      };
    }
  );

  const navigate = useNavigate();

  const onTaskCreateForm = () => {
    navigate("/new");
  };

  const onEditTask = (index: number) => {
    navigate(`/edit${index}`, {
      state: {
        index: index,
      },
    });
  };

  return tasks ? (
    <>
      <MainPage
        priority={priorities}
        status={statuses}
        tasks={tasks}
        onTaskCreateForm={onTaskCreateForm}
        onEditTask={onEditTask}
        users={users}
      />
      <Outlet />
    </>
  ) : (
    <div>Loading</div>
  );
};
