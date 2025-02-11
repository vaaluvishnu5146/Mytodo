import { useState, useLayoutEffect, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Handle:componentDidMount
  useEffect(() => {
    console.log("Running useEffect");
    return () => {
      alert("You are removing Counter component");
    };
  }, []);

  // Handle: componentWillMount
  useLayoutEffect(() => {
    console.log("Running layout Effect");
  }, []);

  // Handle:componentDidUpdate
  useEffect(() => {
    console.log("After");
  }, [count]);

  // Handle: componentWillUpdate
  useLayoutEffect(() => {
    console.log("Before");
  }, [count]);

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
