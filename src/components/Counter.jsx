import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +
      </button>
    </>
  );
}

export default Counter;
