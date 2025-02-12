import { useCallback, useState } from "react";
import Para from "./Para";
import CounterBtn from "./CounterButtons";

function OptimsedCounter() {
  const [count, setCount] = useState(0);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <CounterBtn text="-" onClick={decrement} />
      <Para text={count} />
      <CounterBtn text="+" onClick={increment} />
    </>
  );
}

export default OptimsedCounter;
