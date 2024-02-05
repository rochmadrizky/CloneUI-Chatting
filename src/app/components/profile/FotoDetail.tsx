import React, { useState } from "react";
import ModalContentFoto from "./ModalContentFoto";

interface FotoProfileProps {
  imageUrl: string;
  onClose?: () => void;
}

const FotoProfile: React.FC<FotoProfileProps> = ({ imageUrl, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false); // Reset zoom state when closing modal
    if (onClose) onClose(); // Call onClose function from the parent component if available
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

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

      <ModalContentFoto
        imageUrl={imageUrl}
        isModalOpen={isModalOpen}
        isZoomed={isZoomed}
        closeModal={closeModal}
        toggleZoom={toggleZoom}
      />
    </div>
  );
};

export default FotoProfile;
