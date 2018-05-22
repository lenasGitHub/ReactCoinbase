import React from "react";

const BackDrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;

export default BackDrop;
