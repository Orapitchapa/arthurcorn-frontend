import Image from 'next/image';
import Link from 'next/link';
import reward from '../../public/img/reward.png';
import Icon from '../components/ui-icon';

export const metadata = { title: 'โปรโมชั่น' };

export default function Promotion() {
  return <section className="inner-page">
    <div className="page-heading"><p className="eyebrow">A LITTLE TREAT FOR YOU</p><h1>โปรโมชั่น</h1><p>ให้ทุกแก้ว มีความพิเศษเพิ่มอีกนิด</p></div>
    <div className="loyalty-layout">
      <div className="loyalty-card"><div className="loyalty-top">ARTHURCORN<Icon name="gift"/></div><p className="eyebrow">REWARD CARD</p><h2>10 <span>แก้วโปรด แลกอีก 1 แก้วฟรี</span></h2><div className="stamp-grid" aria-hidden="true">{Array.from({ length: 10 }, (_, i) => <span key={i} className={`stamp${i === 9 ? ' final-stamp' : ''}`}>{i === 9 ? <Icon name="gift"/> : <Icon name="coffee"/>}</span>)}</div><p className="loyalty-bottom">ภาพประกอบบัตรสะสมแต้ม</p></div>
      <div className="loyalty-copy"><span className="pill">สิทธิพิเศษสำหรับลูกค้า</span><h2>สะสมครบ 10 แต้ม<br/>รับเครื่องดื่มฟรี 1 แก้ว</h2><p className="muted">ดูบัตรสะสมแต้มและคูปองของคุณ<br/>ผ่าน LINE Official ของร้าน Arthurcorn</p><Link className="button primary" href="/promotion/coupon">วิธีใช้คูปอง <Icon name="arrow"/></Link></div>
    </div>
    <details className="reward-example"><summary>ดูตัวอย่างบัตรสะสมแต้มใน LINE</summary><Image src={reward} alt="ตัวอย่างบัตรสะสมแต้ม Arthurcorn ใน LINE" sizes="(max-width: 600px) 90vw, 400px"/></details>
  </section>;
}
