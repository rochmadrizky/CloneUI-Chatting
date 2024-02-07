// ButtonDropdown.tsx
import React from "react";
import { IconChevronsRight } from "@tabler/icons-react";

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
    <>
      {(isHovered || showDropdown) && (
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-500 rounded-full bg-white absolute -right-1"
        >
          <IconChevronsRight className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default ButtonDropdown;
