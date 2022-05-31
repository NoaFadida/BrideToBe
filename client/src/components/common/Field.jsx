import React, { forwardRef } from "react";

const Field = forwardRef(({ labelName, type, ...otherProps }, ref) => {
  return (
    <div>
      <label>{labelName}</label>
      <input type={type} ref={ref} {...otherProps} />
    </div>
  );
});

export default Field;
