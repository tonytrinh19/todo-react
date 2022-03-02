import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const handlePlusButton = (e) => {
    setNumber((current) => (current = current + 1));
    console.log("click plu");
  };

  const handleMinusButton = (e) => {
    setNumber((current) => (current = current - 1));
    console.log("click minus");
  };

  return (
    <div>
      <button onClick={handlePlusButton}>+</button>
      <p>{number}</p>
      <button onClick={handleMinusButton}>-</button>
    </div>
  );
}

export default App;
