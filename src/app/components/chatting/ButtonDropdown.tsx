// ButtonDropdown.tsx
import React from "react";
import { IconCircleArrowDown } from "@tabler/icons-react";

interface ButtonDropdownProps {
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  isHovered: boolean;
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({
  showDropdown,
  setShowDropdown,
  isHovered,
}) => {
  return (
    // RizyEver
    <>
      {(isHovered || showDropdown) && (
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-500 bg-white focus:outline-none absolute top-0 right-0 h-6 w-6 flex items-center justify-center rounded-md"
        >
          <IconCircleArrowDown className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default ButtonDropdown;
