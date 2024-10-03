import React from "react";

const Alert = ({msg,type}) => {
  return (
    <div>
      <p className={`alert ${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
