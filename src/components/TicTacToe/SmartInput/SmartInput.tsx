import React, { useState } from "react";

const SmartInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <label>Smart Input</label>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default SmartInput;
