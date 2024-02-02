import React from "react";
import { IconThumbUpFilled, IconHeartFilled } from "@tabler/icons-react";

interface ButtonReaksiProps {
  reactionType: string;
  onClick: () => void;
}

const ButtonReaksi: React.FC<ButtonReaksiProps> = ({
  reactionType,
  onClick,
}) => {
  const reactionIcons: { [key: string]: JSX.Element } = {
    "thumbs-up": <IconThumbUpFilled className="h-4 w-4" />,
    heart: <IconHeartFilled className="h-4 w-4" />,
  };

  return (
    <button
      onClick={onClick}
      className="text-gray-500 hover:text-blue-500 focus:outline-none block w-full text-center"
    >
      {reactionIcons[reactionType]}
    </button>
  );
};

export default ButtonReaksi;
