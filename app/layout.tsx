// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const generateMetadata = (): Metadata => {
  return {
    title: 'ARTHURCORN',
    description: 'Coffee By Arthurcorn',
    openGraph: {
      title: 'ARTHURCORN',
      description: 'Coffee By Arthurcorn',
      images: [
        {
          url: 'https://arthurcorn-coffee.netlify.app/img/logo.jpg',
        },
      ], 
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
