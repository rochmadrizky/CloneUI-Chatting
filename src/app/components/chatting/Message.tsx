import React, { useState, useEffect, useRef } from "react";
import {
  IconCircleArrowDown,
  IconHeartFilled,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import ButtonReaksi from "./ButtonReaksi";

interface MessageProps {
  message: string;
  timestamp: string;
  sender: string;
}

const Message: React.FC<MessageProps> = ({ message, timestamp }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleReactionSelect = (reaction: string) => {
    setSelectedReaction(reaction);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col items-start mb-4">
      <div>
        <p className="text-xs text-gray-500">{timestamp}</p>

        <div
          className="flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-blue-200 p-2 rounded-lg relative">
            <div className="flex items-center gap-2">
              <p className="text-sm">{message}</p>
            </div>

            {selectedReaction && (
              <div className="absolute -bottom-2 left-0">
                {selectedReaction === "thumbs-up" && (
                  <IconThumbUpFilled className="text-blue-500 h-4 w-4" />
                )}
                {selectedReaction === "heart" && (
                  <IconHeartFilled className="text-red-500 h-4 w-4" />
                )}
              </div>
            )}

            {(isHovered || showDropdown) && (
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-gray-500 bg-white focus:outline-none absolute top-0 -right-1 -mt-2 -mr-2 h-6 w-6 flex items-center justify-center rounded-full"
              >
                <IconCircleArrowDown className="h-5 w-5" />
              </button>
            )}
          </div>

          <div ref={dropdownRef} className="relative">
            {showDropdown && (
              <div className="absolute -top-4 left-2 bg-gray-100 rounded-lg  p-1 shadow-md">
                <div className="flex items-center justify-center gap-1">
                  <ButtonReaksi
                    reactionType="thumbs-up"
                    onClick={() => handleReactionSelect("thumbs-up")}
                  />
                  <ButtonReaksi
                    reactionType="heart"
                    onClick={() => handleReactionSelect("heart")}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
