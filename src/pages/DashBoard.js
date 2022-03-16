import React, { useEffect, useState } from "react";
import Clock from "../components/Clock";
import TaskManager from "../components/TaskManager";

export const DashBoard = () => {
  return (
    <div>
      <Clock />
      <TaskManager />
    </div>
  );
};
