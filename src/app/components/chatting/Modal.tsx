import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-lg font-semibold mb-4">
              Apakah dirimu mau telfon?
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              >
                Gak
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Iyo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
