"use client";

import React from "react";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import DropdownMenu from "./DropdownMenu";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 h-[500px] w-80 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button>
            <Link href="/">
              <IconChevronLeft className="text-blue-500" />
            </Link>
          </button>

          <DropdownMenu />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center py-2">
            <img
              src="https://fastly.picsum.photos/id/51/150/150.jpg?hmac=1CAIdxa9_eZlKsIYP26xPd8xk9GCqcW3AwHyOws4oLU"
              alt="Profile Picture"
              className="w-20 h-20 rounded-full mr-4"
            />
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
  );
};

export default Profile;
