import { useState, useRef, useCallback } from "react";
import TextInput from "./TextInput";

export default function ControlledC() {
  const [fname, setFname] = useState("");
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);

  console.log("Re-Rendering");

  const handleInputChange = useCallback((e) => {
    if (e.nativeEvent.data !== "e") {
      setFname(e.target.value);
    }
  }, []);

  function handleSubmit() {
    console.log("fname", fname);
    console.log("lname", lastNameRef.current.value);
    console.log("dob", dobRef.current.value);
  }

  // function handleInputChange(e) {}

  return (
    <>
      <TextInput
        placeholder="First name"
        onChange={handleInputChange}
        value={fname}
      />
      <p>{fname}</p>
      <input ref={lastNameRef} placeholder="Last name" />
      <input type="date" ref={dobRef} placeholder="DOB" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
