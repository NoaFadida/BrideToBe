import React, { forwardRef } from "react";

const Field = forwardRef(({ labelName, inputType }, ref) => {
  return (
    <div>
      <label>{labelName}</label>
      <input type={inputType} ref={ref} />
    </div>
  );
});

export default Field;
