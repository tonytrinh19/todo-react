import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import TaskManager from "./TaskManager";

const App = () => {
  return (
    <div>
      <Clock />
      <TaskManager />
    </div>
  );
};

export default App;
