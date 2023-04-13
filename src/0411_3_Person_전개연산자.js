import React from "react";

const Person = ({name, age, gender}) => {
  return (
    <>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Gender : {gender}</p>
    </>
  );
}

export default Person;



