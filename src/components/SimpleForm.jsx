import { useReducer } from "react";
import TextInput from "./TextInput";

function reducer(state, action) {
  if (action.type === "fname") {
    // stattement
    return { ...state, fname: action.payload };
  } else if (action.type === "lname") {
    //statement
    return { ...state, lname: action.payload };
  }
  return state;
}

export default function SimpleForm() {
  const [state, dispatch] = useReducer(reducer, { fname: "", lname: "" });

  function onSubmit() {
    console.log("New State", state);
  }

  return (
    <div>
      <TextInput
        placeholder="Enter First name"
        value={state.fname}
        onChange={(e) => dispatch({ type: "fname", payload: e.target.value })}
      />
      <TextInput
        placeholder="Enter last name"
        value={state.lname}
        onChange={(e) => dispatch({ type: "lname", payload: e.target.value })}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
