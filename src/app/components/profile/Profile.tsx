"use client";

import React from "react";
import FotoProfile from "./FotoDetail";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import DropdownMenu from "./DropdownMenu";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white border h-[500px] w-80 rounded-lg shadow-lg">
        <div className="flex justify-between items-center py-4 px-3 border-b">
          <button>
            <Link href="/">
              <IconChevronLeft className="text-blue-500" />
            </Link>
          </button>

          <DropdownMenu />
        </div>

        <div className="py-4 px-6 flex items-center justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center py-2">
              <FotoProfile imageUrl="https://fastly.picsum.photos/id/51/150/150.jpg?hmac=1CAIdxa9_eZlKsIYP26xPd8xk9GCqcW3AwHyOws4oLU" />
            </div>

            <div className="py-2">
              <h2 className="text-xl font-semibold">Bang Sobirin Rodriguest</h2>
            </div>

            <div className="py-2">
              <h2 className="text-lg font-semibold">Status</h2>
              <p className="text-sm text-gray-700">Sibuk</p>
            </div>

            <div className="py-2">
              <h2 className="text-lg font-semibold">Nomor</h2>
              <p className="text-sm text-gray-700">082554789256</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
