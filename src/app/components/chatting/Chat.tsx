"use client";

import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import Message from "./Message";
import Modal from "./Modal";
import Contact from "./Contact";
import DropdownMenu from "./DropdownMenu"; // Import DropdownMenu
import { IconSend } from "@tabler/icons-react";

interface Pesan {
  message: string;
  timestamp: string;
  sender: string;
}

const Chat = () => {
  const [pesanList, setPesanList] = useState<Pesan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pesan, setPesan] = useState("");
  const [modalMessage, setModalMessage] = useState(""); // State untuk pesan modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State untuk menentukan apakah dropdown terbuka atau tidak

  useEffect(() => {
    // Menambahkan event listener ketika komponen dimount
    document.addEventListener("mousedown", handleClickOutside);
    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    const dropdownMenu = document.getElementById("");
    if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
      // Menutup dropdown jika klik di luar area dropdown
      setIsDropdownOpen(false);
    }
  };

  const handleAttachClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
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

  // Mengatur pesan modal berdasarkan opsi panggilan yang dipilih
  const handleCallClick = (option: string) => {
    setModalMessage(`Apakah dirimu mau melakukan panggilan ${option}?`);
    handleAttachClick(); // Munculkan modal setelah mengatur pesan
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto">
        <div className="bg-white border h-[500px] w-80 rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="flex justify-between items-center border-b p-3">
            <Contact
              name="Dia"
              photoUrl="https://fastly.picsum.photos/id/658/50/50.jpg?hmac=1u2LcQ_hv8fjyRv9pXz3_HcxsgSLk8fwAKN2QVwZsn0"
            />
            <DropdownMenu
              onCallClick={handleCallClick}
              isDropdownOpen={isDropdownOpen} // Meneruskan state isDropdownOpen ke DropdownMenu
              setIsDropdownOpen={setIsDropdownOpen} // Meneruskan setter setIsDropdownOpen ke DropdownMenu
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {pesanList.length === 0 && (
              <p className="py-2 px-4 text-xs text-gray-400 text-center rounded-xl">
                Gaonok pesan apapun ygy
              </p>
            )}

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
            <form className="flex p-3 gap-2" onSubmit={handleSubmitPesan}>
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
        message={modalMessage} // Meneruskan pesan modal ke komponen Modal
      />
    </div>
  );
};

export default Chat;
