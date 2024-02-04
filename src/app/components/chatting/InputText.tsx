import React from "react";

// Perbarui definisi InputTextProps
interface InputTextProps {
  placeholder: string;
  value?: string; // Buat nilai value menjadi opsional dengan menambahkan tanda tanya (?)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Gunakan InputTextProps dalam komponen InputText
const InputText: React.FC<InputTextProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
