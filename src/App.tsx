import React, { useState } from "react";
import "./styles/index.css";

const App = () => {
  const [tasks, setTasks] = useState([
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
    <div>
      <h2>Task Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Assigned</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.dueDate}</td>
              <td>{task.assigned}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
