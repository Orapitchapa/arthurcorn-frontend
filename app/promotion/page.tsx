"use client";
import reward from "../../public/img/reward.png";
import Menubar from "../../app/components/menubar";
import Link from "next/link";

export default function Promotion() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="px-2 mt-[20px]">
        <img src={reward.src} alt="menu" className="rounded-lg" />
      </div>
      <div className="text-[#818183]">สะสมครบ 10 แต้ม รับน้ำฟรี 1 แก้ว</div>
      <Link href={"/promotion/coupon"}>
      <div className="text-[#3737de] mt-[10px] underline">ดูวิธีการใช้คูปอง</div>
      </Link>
      <div className="flex-grow"></div>
      <Menubar />
    </div>
  );
}
