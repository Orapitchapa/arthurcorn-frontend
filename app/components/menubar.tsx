import DollarOutlined from '@ant-design/icons/lib/icons/DollarOutlined';
import GiftOutlined from '@ant-design/icons/lib/icons/GiftOutlined'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import ReadOutlined from '@ant-design/icons/lib/icons/ReadOutlined';
import TagsOutlined from '@ant-design/icons/lib/icons/TagsOutlined';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';


export default function Menubar() {
 const [currentURL, setCurrentURL] = useState('');


 useEffect(() => {
   setCurrentURL(window.location.pathname);
 }, [currentURL]);


 return (
   <div className='fixed bottom-0 w-[100%]'>
     <div className='w-full h-[65px] grid grid-cols-3 text-[#FFFFFF]'>
       <button className={`rows-2 ${currentURL === '/' ? 'bg-[#eceade] text-[#8e826e]' : 'bg-[#DDDDDD] text-[#A0937D]'}`}>
         <Link href="/">
           <div >
             <ReadOutlined style={{ fontSize: '24px' }} />
           </div>
           <div className='text-[14px]'>
             Menu
           </div>
         </Link>
       </button>
       <button className={`rows-2 ${currentURL === '/account' ? 'bg-[#eceade] text-[#8e826e]' : 'bg-[#DDDDDD] text-[#A0937D]'}`}>
         <Link href="/account">
           <div>
             <DollarOutlined style={{ fontSize: '24px' }} />
           </div>
           <div className='text-[14px]'>
             Account No.
           </div>
         </Link>
       </button>
       <button className={`rows-2 ${currentURL === ('/promotion') ? 'bg-[#eceade] text-[#8e826e]' : 'bg-[#DDDDDD] text-[#A0937D]'}`}>
         <Link href="/promotion">
           <div>
             <GiftOutlined style={{ fontSize: '24px' }} />
           </div>
           <div className='text-[14px]'>
             Promotion
           </div>
         </Link>
       </button>
     </div>
   </div>
 )
}
