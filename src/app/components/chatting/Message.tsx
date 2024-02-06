import React, { useState, useEffect, useRef } from "react";
import ButtonReaksi, { reactions } from "./ButtonReaksi";
import ButtonDropdown from "./ButtonDropdown";
import DropdownReaksi from "./DropdownReaksi";

interface MessageProps {
  message: string;
  timestamp: string;
  sender: string;
  startReply: () => void;
}

const Message: React.FC<MessageProps> = ({
  message,
  timestamp,
  startReply,
}) => {
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

    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dropdownRef]);

  const handleReactionSelect = (reaction: string) => {
    setSelectedReaction(reaction === selectedReaction ? null : reaction);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col items-start mb-4">
      <div>
        <p className="text-xs text-gray-500">{timestamp}</p>

        <div
          ref={dropdownRef}
          className="flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-blue-200 p-2 rounded-lg relative">
            <div className="flex items-center gap-2">
              <p className="text-base break-all">{message}</p>
            </div>

            {selectedReaction && (
              <div className="absolute -bottom-2 left-0">
                <ButtonReaksi
                  reactionType={selectedReaction}
                  onClick={() => handleReactionSelect(selectedReaction || "")}
                />
              </div>
            )}

            <ButtonDropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              isHovered={isHovered}
            />
          </div>

          <button
            onClick={startReply}
            className="text-sm text-blue-500 underline"
          >
            Reply
          </button>

          <DropdownReaksi
            showDropdown={showDropdown}
            reactions={reactions}
            handleReactionSelect={handleReactionSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
