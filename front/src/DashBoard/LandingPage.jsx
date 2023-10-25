import React from "react";
import SideBar from "./SideBar";
import { Route, Router } from "react-router";
import Dashboard from "./Dashboard";
function LandingPage() {
  return (
    <div>
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default LandingPage;
