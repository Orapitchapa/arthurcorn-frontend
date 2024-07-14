"use client";
import coupon1 from "../../../public/img/coupon1.jpg";
import coupon2 from "../../../public/img/coupon2.jpg";
import coupon3 from "../../../public/img/coupon3.jpg";
import coupon4 from "../../../public/img/coupon4.jpg";
import coupon5 from "../../../public/img/coupon5.jpg";
import coupon6 from "../../../public/img/coupon6.jpg";
import coupon7 from "../../../public/img/coupon7.jpg";
import Menubar from "../../../app/components/menubar";

export default function Promotion() {
    return (
        <div className="h-screen">
            <div className="px-[10px] mt-[20px]">
                <div className="text-[18px]">วิธีการใช้คูปอง</div>
                <div className="mt-[20px]">
                    1. เข้าไปที่ line official ของร้าน Arthurcorn และคลิ๊กที่บัตรสะสมแต้ม
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon1.src} alt="menu" className="rounded-lg" />
                </div>
                <div className="mt-[30px]">
                    2. กดไปที่ ได้รับแล้ว
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon2.src} alt="menu" className="rounded-lg" />
                </div>
                <div className="mt-[30px]">
                    3. กดไปที่คูปองที่ต้องการใช้
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon3.src} alt="menu" className="rounded-lg" />
                </div>
                <div className="mt-[30px]">
                    4. กดไปที่ใช้ของรางวัลนี้
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon4.src} alt="menu" className="rounded-lg" />
                </div>
                <div className="mt-[30px]">
                    5. กดไปที่เปลี่ยนเป็นใช้งานแล้ว
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon5.src} alt="menu" className="rounded-lg" />
                </div>
                <div className="mt-[30px]">
                    6. กดไปที่ใช้ของรางวัล
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon6.src} alt="menu" className="rounded-lg" />
                </div>
                <div className="mt-[30px]">
                    7. เมื่อสถานะเปลี่ยนเป็นใช้แล้ว กรุณาแคปหน้าจอส่งให้ทางร้านนะคะ
                </div>
                <div className="mt-[15px] w-[200px]">
                    <img src={coupon7.src} alt="menu" className="rounded-lg" />
                </div>
            </div>
            <div className="pb-[80px]"></div>
            <div className="flex-grow"></div>
            <Menubar />
        </div>
    );
}