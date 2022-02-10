import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchPriorities } from "../../../features/redux/priorities-reducer";
import { fetchStatuses } from "../../../features/redux/status-reducer";
import { TAppState } from "../../../features/redux/store";
import { fetchTasks } from "../../../features/redux/task-reducer";
import { fetchUser } from "../../../features/redux/users-reducer";
import { Sidebar } from "../../../shared/ui/core/molecules";
import { CreateTaskFormConnector } from "../create-task-form-connector";
import { EditTaskConnector } from "../edit-task-connector";
import { MainPageConnector } from "../main-page-connector";
import { StubConnector } from "../stub-connector";

export const AppNavigation = () => {
  const { tenatId } = useSelector((state: TAppState) => ({
    tenatId: state.app.Tenatguid,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTasks(tenatId));
    dispatch(fetchPriorities(tenatId));
    dispatch(fetchStatuses(tenatId));
    dispatch(fetchUser(tenatId));
  }, [tenatId]);

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainPageConnector />}>
          <Route path="new" element={<CreateTaskFormConnector />} />
          <Route path="edit:taskId" element={<EditTaskConnector />} />
        </Route>
        <Route path="/stub" element={<StubConnector />} />
      </Routes>
    </div>
  );
};
