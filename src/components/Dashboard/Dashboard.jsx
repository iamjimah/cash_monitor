import React from "react";
import { Link } from "react-router-dom";
import { DashboardItems } from "./DashboardItems";

function Dashboard() {
  return (
    <nav id="dashboard">
      {DashboardItems.map((items) => (
        <Link to={items.path} key={items.id} className="nav-item">
          <div className="icon-container">{items.icon}</div>
          <div>{items.title}</div>
        </Link>
      ))}
    </nav>
  );
}

export default Dashboard;
