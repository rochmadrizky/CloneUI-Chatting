// DropdownMenu.tsx
import React, { useEffect, useRef } from "react";
import ButtonMenu from "./ButtonMenu";
import { IconPhone, IconVideo } from "@tabler/icons-react";

// Definisikan tipe untuk opsi panggilan
interface CallOption {
  icon: React.ReactElement; // Ikona React
  name: string; // Nama ikon
}

interface DropdownMenuProps {
  onCallClick: (option: string) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  onCallClick,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownMenu = dropdownRef.current;
      if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [setIsDropdownOpen]);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Tentukan opsi panggilan dengan ikon dan nama ikon
  const callOptions: CallOption[] = [
    { icon: <IconPhone />, name: "Phone" },
    { icon: <IconVideo />, name: "Video" },
  ];

  const handleCallClick = (option: string) => {
    onCallClick(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <ButtonMenu onClick={handleToggleDropdown} />
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-gray-100 overflow-hidden">
          {callOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleCallClick(option.name)}
              className="px-4 py-2 text-sm text-blue-500 hover:bg-gray-200"
              role="menuitem"
            >
              {option.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
