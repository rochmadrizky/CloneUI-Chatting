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
    <div className="relative flex items-center p-1">
      {showDropdown && (
        <div className="absolute bg-gray-100 rounded-lg p-1 shadow-md">
          <div className="space-y-2">
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
