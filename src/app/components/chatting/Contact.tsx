import React from "react";

interface ContactProps {
  name: string;
  photoUrl: string;
}

const Contact: React.FC<ContactProps> = ({ name, photoUrl }) => {
  return (
    <div className="flex items-center">
      <img src={photoUrl} alt={name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm text-gray-500">Online</p>
      </div>
    </div>
  );
};

export default Contact;