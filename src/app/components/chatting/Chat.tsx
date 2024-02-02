"use client";

import { useState } from "react";
import InputText from "./InputText";
import Message from "./Message";
import Modal from "./Modal";
import Contact from "./Contact";
import { IconPhone, IconSend } from "@tabler/icons-react";

const Chat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAttachClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    console.log("Panggilan dilakukan");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto">
        <div className="bg-white border h-96 rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="flex justify-between items-center border-b p-4">
            <Contact
              name="Dia"
              photoUrl="https://fastly.picsum.photos/id/658/50/50.jpg?hmac=1u2LcQ_hv8fjyRv9pXz3_HcxsgSLk8fwAKN2QVwZsn0"
            />
            <button onClick={handleAttachClick}>
              <IconPhone className=" stroke-2 text-blue-500" />
            </button>
          </div>

          <div className="flex-1">
            <div className="p-4">
              <Message
                message="Hai gaes"
                timestamp="10:00 PAGI"
                sender="User"
              />
            </div>
          </div>

          <div className="border-t">
            <form className="flex p-4 gap-2">
              <InputText placeholder="Tambahkan pesan ..." />
              <button type="submit">
                <IconSend className="stroke-2 text-blue-500" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      />
    </div>
  );
};

export default Chat;
