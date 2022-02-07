import React from "react";
import { useLocation } from "react-router";

export const StubConnector: React.FC<{}> = () => {
  const location = useLocation();
  const namePage = location.state as string;

  return <div style={{ marginLeft: "95px" }}>{namePage}</div>;
};
