import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime((currentTime) => (currentTime = new Date().toLocaleTimeString()));
    }, 100);
  }, []);

  return <div>Local Time: {time}</div>;
};

export default Clock;
