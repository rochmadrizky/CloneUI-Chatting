import { useState, useEffect, useRef } from "react";
import { IconDotsVertical } from "@tabler/icons-react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleMenu}>
        <IconDotsVertical className="text-blue-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={toggleMenu}
          >
            Menu Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={toggleMenu}
          >
            Menu Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={toggleMenu}
          >
            Menu Item 3
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
