import React from "react";
import { useDispatch } from "react-redux";
import increment from "../action";

const MyButton = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment(1))}>Increase counter</button>
  );
};

export default MyButton;
