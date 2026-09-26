'use client';

import Image from 'next/image';
import { useState } from 'react';
import Icon from './ui-icon';

const menus = [
  { title: 'กาแฟสด', en: 'Coffee', category: 'กาแฟ', file: '1.jpg', width: 2245, height: 3179 },
  { title: 'กาแฟนม', en: 'Milk coffee', category: 'กาแฟ', file: '2.jpg', width: 2245, height: 3179 },
  { title: 'มัทฉะ', en: 'Matcha', category: 'มัทฉะ', file: 'matcha.jpg', width: 1122, height: 1402 },
  { title: 'ชา', en: 'Tea', category: 'ชา', file: '3.jpg', width: 2245, height: 3179 },
  { title: 'ชาใสและชาผลไม้', en: 'Refreshing tea', category: 'ชา', file: '4.jpg', width: 2245, height: 3179 },
  { title: 'นมสดและโกโก้', en: 'Milk & cocoa', category: 'นม & โกโก้', file: '5.jpg', width: 2245, height: 3179 },
  { title: 'เครื่องดื่มอื่น ๆ', en: 'More drinks', category: 'อื่น ๆ', file: '6.jpg', width: 2245, height: 3179 },
  { title: 'โซดา', en: 'Soda', category: 'โซดา', file: '7.jpg', width: 2245, height: 3179 },
  { title: 'Bakery', en: 'Bakery', category: 'Bakery', file: 'bakery.png', width: 1254, height: 1254 },
];
const categories = ['ทั้งหมด', 'กาแฟ', 'มัทฉะ', 'ชา', 'นม & โกโก้', 'โซดา', 'อื่น ๆ', 'Bakery'];

export default function MenuCatalog() {
  const [category, setCategory] = useState('ทั้งหมด');
  const filtered = menus.filter(menu => category === 'ทั้งหมด' || menu.category === category);

  return <section id="menu" className="catalog-section" aria-label="รายการเมนู">
    <div className="category-list" aria-label="หมวดหมู่เมนู">{categories.map(item => <button key={item} className={`category${category === item ? ' active' : ''}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item === 'ทั้งหมด' && <Icon name="coffee"/>}{item}</button>)}</div>
    <div className="catalog-meta"><h2>{category === 'ทั้งหมด' ? 'เมนูทั้งหมด' : category}</h2><span aria-live="polite">{filtered.length} ภาพเมนู</span></div>
    <div className="menu-grid">{filtered.map((menu, index) => <figure key={menu.file} className="menu-card">
      <div className="menu-preview"><Image src={`/img/${menu.file}`} alt={`รายการ${menu.title}พร้อมราคา`} width={menu.width} height={menu.height} sizes="(max-width: 1000px) 100vw, 600px" quality={95} priority={index < 2}/></div>
      <figcaption className="menu-card-info"><div><span className="card-kicker">{menu.en}</span><h3>{menu.title}</h3></div></figcaption>
    </figure>)}</div>
  </section>;
}
