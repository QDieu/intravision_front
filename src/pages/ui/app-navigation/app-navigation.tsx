import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchTenatdId } from "../../../features/redux/app-reducer";
import { Sidebar } from "../../../shared/ui/core/molecules";
import { CreateTaskFormConnector } from "../create-task-form-connector";
import { EditTaskConnector } from "../edit-task-connector";
import { MainPageConnector } from "../main-page-connector";
import { StubConnector } from "../stub-connector";

export const AppNavigation = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTenatdId());
  }, []);

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainPageConnector />}>
          <Route path="new" element={<CreateTaskFormConnector />} />
          <Route path="edit" element={<EditTaskConnector />} />
        </Route>
        <Route path="/stub" element={<StubConnector />} />
      </Routes>
    </div>
  );
};
