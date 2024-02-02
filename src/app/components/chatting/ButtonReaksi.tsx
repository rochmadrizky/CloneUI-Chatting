import React from "react";
import { IconThumbUpFilled, IconHeartFilled } from "@tabler/icons-react";

interface ButtonReaksiProps {
  reactionType: string;
  onClick: () => void;
}

export const reactions = [
  {
    type: "thumbs-up",
    icon: <IconThumbUpFilled className="h-4 w-4 text-blue-500" />,
  },
  { type: "heart", icon: <IconHeartFilled className="h-4 w-4 text-red-500" /> },
];

const ButtonReaksi: React.FC<ButtonReaksiProps> = ({
  reactionType,
  onClick,
}) => {
  const reactionIcons: { [key: string]: JSX.Element } = {
    "thumbs-up": <IconThumbUpFilled className="h-4 w-4 text-blue-500" />,
    heart: <IconHeartFilled className="h-4 w-4 text-red-500" />,
  };

  return (
    <button
      onClick={onClick}
      className="focus:outline-none block w-full text-center"
    >
      {reactionIcons[reactionType]}
    </button>
  );
};

export default ButtonReaksi;
