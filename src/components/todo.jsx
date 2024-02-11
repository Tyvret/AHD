import React from "react";

export function Todo(props) {
  return (
    <div className="todo">
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
      <p>{props.id}</p>
    </div>
  );
}
