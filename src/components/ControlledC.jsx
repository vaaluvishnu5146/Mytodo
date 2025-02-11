import React, { useState } from "react";

export default function ControlledC() {
  const [fname, setFname] = useState("");
  return (
    <>
      <input
        placeholder="First name"
        onChange={(e) => {
          if (e.nativeEvent.data !== "e") {
            setFname(e.target.value);
          }
        }}
        value={fname}
      />
      <p>{fname}</p>
      <input placeholder="Last name" />
    </>
  );
}
