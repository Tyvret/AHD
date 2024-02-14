import React from "react";

export function Card(props) {
  const [isActive, setIsActive] = React.useState(false);

  function handleClick() {
    props.onClick(props.name);
    setIsActive(!isActive);
  }

  return (
    <div
      className={isActive ? "card active" : "card"}
      onClick={handleClick}
      name={props.name}
    >
      <img className={isActive ? "active-card" : ""} src={props.bild} alt="" />
    </div>
  );
}
