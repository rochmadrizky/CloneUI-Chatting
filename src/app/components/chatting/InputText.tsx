import React from "react";

interface InputTextProps {
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
    />
  );
};

export default InputText;
