import React from "react";
import { createRoot } from "react-dom/client";
import TaskOverview from "./TaskOverview";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskOverview />
  </React.StrictMode>
);
