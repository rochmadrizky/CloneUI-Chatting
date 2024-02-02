import React from "react";
import ButtonReaksi from "./ButtonReaksi";

interface DropdownReaksiProps {
  showDropdown: boolean;
  reactions: Record<string, { icon: JSX.Element }>; // Perbarui tipe reactions
  handleReactionSelect: (reaction: string) => void;
}

const DropdownReaksi: React.FC<DropdownReaksiProps> = ({
  showDropdown,
  reactions,
  handleReactionSelect,
}) => {
  return (
    <div className="relative">
      {showDropdown && (
        <div className="absolute -top-4 left-2 bg-gray-100 rounded-lg p-1 shadow-md">
          <div className="flex items-center justify-center gap-1">
            {Object.keys(reactions).map((reactionType, index) => (
              <ButtonReaksi
                key={index}
                reactionType={reactionType}
                onClick={() => handleReactionSelect(reactionType)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownReaksi;
