import React, { useEffect } from "react";
import { Mbackground } from "./Modal.Style";

const Modal = ({ message, setError }) => {
  var timer1;
  useEffect(() => {
    timer1 = setTimeout(() => {
      setError(false);
      clearTimeout(timer1);
    }, [2000]);
  }, []);
  return (
    <>
      <Mbackground
        onClick={() => {
          clearTimeout(timer1);
          setError(false);
        }}
      >
        <div className="messageBox">
          <h3>{message}</h3>
        </div>
      </Mbackground>
    </>
  );
};
export default Modal;
