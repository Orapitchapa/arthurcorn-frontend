'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon, { type IconName } from './ui-icon';

const links: { href: string; label: string; icon: IconName }[] = [
  { href: '/', label: 'เมนู', icon: 'coffee' },
  { href: '/account', label: 'ชำระเงิน', icon: 'wallet' },
  { href: '/promotion', label: 'โปรโมชั่น', icon: 'gift' },
];

export default function Menubar() {
  const pathname = usePathname();
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="Arthurcorn หน้าร้าน">
        <span className="brand-word">ARTHURCORN</span>
      </Link>
      <nav className="main-nav" aria-label="เมนูหลัก">{links.map(link => {
        const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        return <Link key={link.href} href={link.href} className={`nav-link${active ? ' active' : ''}`} aria-current={active ? 'page' : undefined}><Icon name={link.icon} />{link.label}</Link>;
      })}</nav>
    </div>
  </header>;
}
