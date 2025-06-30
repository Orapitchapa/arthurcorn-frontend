"use client"
import React from 'react';
import menu1 from "../public/img/menu1.jpg";
import menu2 from "../public/img/menu2.jpg";
import menu3 from "../public/img/menu3.jpg";
import menu4 from "../public/img/menu4.jpg";
import menu5 from "../public/img/menu5.jpg";
import menu6 from "../public/img/menu6.jpg";
import menu7 from "../public/img/menu7.jpg";
import menu8 from "../public/img/menu8.jpg";
import menu9 from "../public/img/menu9.jpg";
import menu10 from "../public/img/menu10.jpg";
import Menubar from "../app/components/menubar";

export default function Home() {
  return (
    <div>
    <div className="">
      <div className="px-2 text-center">
        <div className="mx-auto mt-[10px]">ARTHURCORN MENU</div>
        <img src={menu1.src} alt="menu" className="mt-[2px] mb-[8px] shadow-lg rounded-lg"/>
        <img src={menu2.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu3.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu4.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu5.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu6.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu7.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu8.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu9.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
        <img src={menu10.src} alt="menu" className="my-[8px] shadow-lg rounded-lg"/>
      </div>
    </div>
    <div className="mb-[80px]"></div>
    <div className="flex-grow"></div>
    <Menubar />
    </div>
  );
}
