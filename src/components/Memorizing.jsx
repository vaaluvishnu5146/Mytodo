import { useState, useMemo } from "react";
import { Input } from "reactstrap";

export default function Memorizing() {
  const [num1, setNum1] = useState(0);

  const sum = useMemo(() => add(num1), [num1]);

  function add(a) {
    console.log("Running for ", a);
    return a * 10;
  }

  return (
    <div>
      <Input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
      <button onClick={() => console.log(sum)}>Calculate</button>
    </div>
  );
}
