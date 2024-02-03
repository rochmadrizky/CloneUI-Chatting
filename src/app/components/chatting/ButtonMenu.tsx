import React from "react";
import { IconDotsVertical } from "@tabler/icons-react";

interface ButtonMenuProps {
  onClick: () => void;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <IconDotsVertical className=" stroke-2 text-blue-500" />
    </button>
  );
};

export default ButtonMenu;
