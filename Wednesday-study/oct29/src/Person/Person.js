import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>이름 : {props.name}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  );
};

export default Person;
