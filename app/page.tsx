"use client";
import React, { useState } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css'; // สำหรับ Ant Design v5
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
  const images = [
    menu1, menu2, menu3, menu4, menu5,
    menu6, menu7, menu8, menu9, menu10
  ];

  const [current, setCurrent] = useState(0);

  const handleAfterChange = (currentSlide: number) => {
    setCurrent(currentSlide);
  };

  return (
    <div>
      <div className="px-2 text-center mt-4">
        <div className="text-xl font-bold mb-4">ARTHURCORN MENU</div>

        <Carousel
          afterChange={handleAfterChange}
          className="w-full max-w-xl mx-auto"
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img.src}
                alt={`menu${index + 1}`}
                className="object-cover rounded-md shadow-md mx-auto"
              />
            </div>
          ))}
        </Carousel>

        {/* แสดงตัวเลขใต้ Carousel */}
        <div className="mt-2 text-sm text-gray-600">
          Page {current + 1} / {images.length}
        </div>
      </div>

      <div className="mb-[80px]"></div>
      <Menubar />
    </div>
  );
}
