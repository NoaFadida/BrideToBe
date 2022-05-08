import React, { forwardRef } from "react";

const Field = forwardRef(({ labelName, type }, ref) => {
  return (
    <div>
      <label>{labelName}</label>
      <input type={type} ref={ref} />
    </div>
  );
});

export default Field;
