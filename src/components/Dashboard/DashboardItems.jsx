import React from "react";
import {
  AccountCircle,
  Dashboard,
  ExitToApp,
  LocalAtm,
} from "@material-ui/icons";

export const DashboardItems = [
  {
    id: "1",
    title: "Main",
    path: "/hero",
    icon: <Dashboard fontSize="large" />,
  },
  {
    id: "2",
    title: "Tracker",
    path: "/tracker",
    icon: <LocalAtm fontSize="large" />,
  },

  {
    id: "3",
    title: "Create Account",
    path: "/account",
    icon: <AccountCircle fontSize="large" />,
  },
  {
    id: "4",
    title: "Credits",
    path: "/credits",
    icon: <ExitToApp fontSize="large" />,
  },
];
