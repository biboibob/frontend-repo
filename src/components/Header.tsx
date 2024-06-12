"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

//Asset
import Logo from "../../public/logo.jpg";
import EditLogo from "../../public/SVG/Edit.svg";
import LogoutLogo from "../../public/SVG/Logout.svg";
import UserIcon from "../../public/user.svg";

//Redux
import { useSelector } from "react-redux";

type Props = {};

function Header({}: Props) {
  const result = useSelector((state: any) => state.generalReducer);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [userData, setUserData] = useState({
    phone: 0,
    name: "",
    email: "",
    token: "",
  });

  const onTogglePanel = () => {
    setIsPanelOpen((prev) => (prev ? false : true));
  };

  useEffect(() => {
    const { name, email, phone, token } = result.UserData;

    setUserData((prev) => ({
      name,
      email,
      phone,
      token,
    }));
  }, [result.UserData]);

  return (
    <div className="flex justify-between items-center p-5 shadow-md relative ">
      {/* Panel */}
      <div
        className={`flex flex-col absolute gap-3 top-24 bg-white border rounded-xl p-5 transition-all shadow-md ${
          isPanelOpen ? "right-5  " : "-right-full"
        }`}
      >
        <div className="flex gap-3">
          <Image
            src={UserIcon}
            alt="Logo-Header"
            className="h-6 w-6 rounded-full mt-2"
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-black text-xl font-bold">
                {userData.name}
              </span>
              <span className="text-gray-2 text-xs">{userData.email}</span>
            </div>
            <span className=" text-[10px] px-3 py-1 w-fit bg-sky-600 rounded-2xl text-white">
              +62 - {userData.phone}
            </span>
          </div>
        </div>
        <div className="border-b border-zinc-300" />
        <div className="flex gap-3 items-center">
          <Image
            src={EditLogo}
            alt="Logo-Header"
            className="h-4 w-4 rounded-full"
          />
          <span className="text-gray-2 text-sm">Edit Profile</span>
        </div>
        <div className="border-b border-zinc-300" />
        <div className="flex gap-3 items-center">
          <Image
            src={LogoutLogo}
            alt="Logo-Header"
            className="h-4 w-4 rounded-full"
          />
          <span className="text-red text-sm">Sign Out</span>
        </div>
      </div>

      <Image src={Logo} alt="Logo-Header" className="h-10 w-10 rounded-full" />
      <div className="flex gap-8 text-black">
        <span className="cursor-pointer hover:opacity-50 font-bold">Home</span>
        <span className="cursor-pointer hover:opacity-50 font-bold">
          Service
        </span>
        <span className="cursor-pointer hover:opacity-50 font-bold">About</span>
      </div>
      <div className="flex gap-2" onClick={onTogglePanel}>
        <Image src={UserIcon} alt="icon-user" className="h-8 w-8" />
      </div>
    </div>
  );
}

export default Header;
