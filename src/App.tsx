import React, { useState } from "react";

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
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Due Date</th>
            <th className="text-left p-2">Assigned</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.dueDate}</td>
              <td className="p-2">{task.assigned}</td>
              <td className="p-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
