import Link from "next/link";
import React from "react";

interface ContactProps {
  name: string;
  photoUrl: string;
}

const Contact: React.FC<ContactProps> = ({ name, photoUrl }) => {
  return (
    <Link href="/profile">
      <div className="flex items-center">
        <img
          src={photoUrl}
          alt={name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-base font-bold">{name}</p>
          <p className="text-xs text-blue-500">Online</p>
        </div>
      </div>
    </Link>
  );
};

export default Contact;
