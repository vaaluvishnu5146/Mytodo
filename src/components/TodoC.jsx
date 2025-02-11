import React, { useEffect, useState } from "react";
import Para from "./Para";

export default function TodoC() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="container py-5">
      <p>Todos</p>
      {data.map((todo, index) => (
        <Para key={`${todo.title}-${todo.id}-${index}`} text={todo.title} />
      ))}
    </div>
  );
}
