import { IconX } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";

interface ModalContentProps {
  imageUrl: string;
  isModalOpen: boolean;
  isZoomed: boolean;
  closeModal: () => void;
  toggleZoom: () => void;
}

const ModalContentFoto: React.FC<ModalContentProps> = ({
  imageUrl,
  isModalOpen,
  isZoomed,
  closeModal,
  toggleZoom,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close modal
  function handleClickOutside(event: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }

  // Handle "Escape" key press to close modal
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown); // Add event listener for "Escape" key
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown); // Remove event listener when modal is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    };
  }, [isModalOpen]);

  return (
    <div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="p-4" ref={modalRef}>
            <div className="relative right-14 -top-8">
              <button onClick={closeModal}>
                <IconX className="text-white hover:text-blue-500" />
              </button>
            </div>

            <img
              src={imageUrl}
              alt="Selected"
              className={`w-64 h-64 cursor-pointer ${
                isZoomed ? "transform scale-150" : ""
              }`}
              onClick={toggleZoom}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContentFoto;
