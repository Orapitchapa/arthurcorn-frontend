import Image from 'next/image';
import account from '../../public/img/account.jpg';
import Icon from '../components/ui-icon';

export const metadata = { title: 'ชำระเงิน' };

export default function Account() {
  return <section className="inner-page">
    <div className="page-heading"><p className="eyebrow">PAYMENT</p><p>ชำระเงิน</p><p>สแกน QR Code เพื่อชำระเงินให้ร้าน Arthurcorn</p></div>
    <div className="payment-panel">
      <Image src={account} alt="QR Code สำหรับชำระเงินร้าน Arthurcorn" className="payment-qr" sizes="(max-width: 600px) 85vw, 360px" priority />
      <a href="/img/account.jpg" download="Arthurcorn-payment.jpg" className="button primary">บันทึก QR Code <Icon name="arrow" /></a>
      <p className="small-note">ตรวจสอบชื่อผู้รับและยอดเงินก่อนชำระเงิน</p>
    </div>
  </section>;
}
