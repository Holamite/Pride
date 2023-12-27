import React from "react";

const ToggleSwitch = ({ onChange }) => {
  return (
    <label className="toggle-container">
      <input type="checkbox" onChange={onChange} id="toggle" name="toggle" />
      <span></span>
    </label>
  );
};

export default ToggleSwitch;
