import { IconX } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";

interface FotoProfileProps {
  imageUrl: string; // Menetapkan tipe string untuk imageUrl
  onClose?: () => void; // Menetapkan tipe fungsi untuk menutup modal, opsional
}

const FotoProfile: React.FC<FotoProfileProps> = ({ imageUrl, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false); // Reset zoom state when closing modal
    if (onClose) onClose(); // Panggil fungsi onClose dari parent component jika tersedia
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className="py-2">
        <img
          src={imageUrl}
          alt="Profile Picture"
          className="w-28 h-28 rounded-full cursor-pointer"
          onClick={openModal}
        />
      </div>

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

export default FotoProfile;
