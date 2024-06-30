"use client";
import account from "../../public/img/account.jpg";
import Menubar from "../../app/components/menubar";

export default function Account() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="px-2 mt-[20px]">
        <img src={account.src} alt="menu" className="rounded-lg" />
      </div>
      <div className="flex-grow"></div>
      <Menubar />
    </div>
  );
}
