import React from "react";
import {
  IconThumbUpFilled,
  IconHeartFilled,
  IconMoodHappyFilled,
} from "@tabler/icons-react";

interface ButtonReaksiProps {
  reactionType: string;
  onClick: () => void;
}

export const reactions: Record<string, { icon: JSX.Element }> = {
  "thumbs-up": {
    icon: (
      <IconThumbUpFilled className="h-4 w-4 text-blue-500 bg-white rounded-full" />
    ),
  },
  heart: {
    icon: (
      <IconHeartFilled className="h-4 w-4 text-red-500 bg-white rounded-full" />
    ),
  },
  happy: {
    icon: (
      <IconMoodHappyFilled className="h-4 w-4 text-yellow-500 bg-white rounded-full" />
    ),
  },
};

const ButtonReaksi: React.FC<ButtonReaksiProps> = ({
  reactionType,
  onClick,
}) => {
  const reaction = reactions[reactionType];

  if (!reaction) return null;

  return (
    <button
      onClick={onClick}
      className="focus:outline-none w-full text-center flex items-center justify-center"
    >
      {reaction.icon}
    </button>
  );
};

export default ButtonReaksi;
