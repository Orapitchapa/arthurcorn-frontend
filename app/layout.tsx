import './globals.css';
import type { Metadata } from 'next';
import Menubar from './components/menubar';

export const metadata: Metadata = {
  title: { default: 'ARTHURCORN — เมนูเครื่องดื่ม', template: '%s | ARTHURCORN' },
  description: 'เมนูเครื่องดื่ม โปรโมชั่น และช่องทางชำระเงินร้าน Arthurcorn',
  openGraph: { title: 'ARTHURCORN', description: 'Good drink, good day', images: ['https://arthurcorn-coffee.netlify.app/img/logo.jpg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="th"><body>
    <a href="#main-content" className="skip-link">ข้ามไปยังเนื้อหา</a>
    <Menubar/>
    <main id="main-content" className="site-main">{children}</main>
    <footer className="site-footer"><LinkBrand/><span>GOOD DRINK GOOD DAY</span></footer>
  </body></html>;
}

function LinkBrand() { return <span className="footer-brand">ARTHURCORN</span>; }
