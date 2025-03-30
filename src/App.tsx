import React, { useState } from "react";
import TaskTable from "./components/RecentActivityTable";
import "./styles/index.css";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  assigned: string;
  status: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete Security Audit",
      dueDate: "2023-12-15",
      assigned: "John Doe",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Update Privacy Policy",
      dueDate: "2023-12-20",
      assigned: "Jane Smith",
      status: "Pending",
    },
    {
      id: 3,
      title: "Review Compliance Checklist",
      dueDate: "2023-12-25",
      assigned: "Alice Johnson",
      status: "Completed",
    },
  ]);

  return (
    <div className="bg-white rounded p-4">
      <h2 className="text-lg font-bold mb-4">Task Overview</h2>
      <div className="w-full">
        <TaskTable data={tasks} />
      </div>
    </div>
  );
};

export default App;
