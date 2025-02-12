import { useState, useCallback } from "react";
import CounterBtn from "./CounterButtons";
// import ChildComponent from "./ChildComponent";

const TestC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <CounterBtn onClick={increment} text="Increment" />
    </div>
  );
};

export default TestC;
