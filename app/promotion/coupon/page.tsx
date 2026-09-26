import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/ui-icon';

export const metadata = { title: 'วิธีใช้คูปอง' };
const steps = [
  'เข้า LINE Official ของร้าน Arthurcorn แล้วเลือกบัตรสะสมแต้ม',
  'เลือก “ได้รับแล้ว”',
  'เลือกคูปองที่ต้องการใช้',
  'กด “ใช้ของรางวัลนี้”',
  'กด “เปลี่ยนเป็นใช้งานแล้ว”',
  'กด “ใช้ของรางวัล”',
  'เมื่อสถานะเปลี่ยนเป็นใช้แล้ว แคปหน้าจอส่งให้ทางร้าน',
];

export default function Coupon() {
  return <section className="inner-page">
    <Link href="/promotion" className="back-link">← กลับไปโปรโมชั่น</Link>
    <div className="page-heading"><p className="eyebrow">HOW TO REDEEM</p><h1>วิธีใช้คูปอง</h1><p>ใช้คูปองผ่านบัตรสะสมแต้มใน LINE ของร้าน</p></div>
    <ol className="coupon-grid">{steps.map((step, i) => <li className="coupon-step" key={step}><div className="step-heading"><span className="step-number">{String(i + 1).padStart(2, '0')}</span><h2>{step}</h2></div><Image src={`/img/coupon0${i + 1}.jpg`} alt={`ขั้นตอนที่ ${i + 1}: ${step}`} width={540} height={1170} sizes="(max-width: 600px) 80vw, 260px"/></li>)}</ol>
    <div className="coupon-finish"><Link href="/" className="button primary">กลับไปเลือกเมนู <Icon name="arrow"/></Link></div>
  </section>;
}
