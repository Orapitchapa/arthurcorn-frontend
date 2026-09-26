import Image from 'next/image';
import MenuCatalog from './components/menu-catalog';

export default function Home() {
  return <>
    <section className="menu-intro">
      <div><p className="intro-thai">แก้วโปรดของคุณ อยู่ที่นี่</p></div>
      <p className="intro-note">กาแฟ ชา และเครื่องดื่มแก้วโปรด<br />เลือกหมวดเพื่อดูเมนูและราคา</p>
    </section>
    <MenuCatalog />
    <section className="shop-information" aria-labelledby="information-title">
      <div className="information-copy">
        <p className="eyebrow">INFORMATION</p>
        <h2 id="information-title">ข้อมูลเครื่องดื่มและการสะสมแต้ม</h2>
        <ul>
          <li>ไซส์ S 16 oz / L 22 oz</li>
          <li>เปลี่ยนเป็นนมโอ๊ตหรือนมถั่วเหลืองได้</li>
          <li>สะสมครบ 10 แก้ว รับฟรี 1 แก้ว</li>
        </ul>
      </div>
      <Image src="/img/menu1.jpg" alt="ข้อมูลไซส์ S และ L ตัวเลือกนมโอ๊ตหรือนมถั่วเหลือง และการสะสมแต้มร้าน Arthurcorn" width={1254} height={1254} sizes="(max-width: 600px) 100vw, 480px" quality={95} />
    </section>
  </>;
}
