"use client";

import React, { useState } from "react";
import InputText from "./InputText";
import Message from "./Message";
import Modal from "./Modal";
import Contact from "./Contact";
import { IconPhone, IconSend } from "@tabler/icons-react";

interface Pesan {
  message: string;
  timestamp: string;
  sender: string;
}

const Chat = () => {
  const [pesanList, setPesanList] = useState<Pesan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pesan, setPesan] = useState("");

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

  const handleSubmitPesan = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pesan.trim() !== "") {
      const waktu = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const pengirim = "Pengguna";
      setPesanList([
        ...pesanList,
        { message: pesan, timestamp: waktu, sender: pengirim },
      ]);
      setPesan("");
    }
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

          <div className="flex-1 overflow-y-auto">
            <div className="p-2">
              {pesanList.map((pesan, index) => (
                <Message
                  key={index}
                  message={pesan.message}
                  timestamp={pesan.timestamp}
                  sender={pesan.sender}
                />
              ))}
            </div>
          </div>

          <div className="border-t">
            <form className="flex p-4 gap-2" onSubmit={handleSubmitPesan}>
              <InputText
                placeholder="Tambahkan pesan ..."
                value={pesan}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPesan(e.target.value)
                }
              />
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
