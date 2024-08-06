// app/layout.tsx
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ARTHURCORN',
  description: 'Coffee By Arthurcorn',
  openGraph: {
    title: 'ARTHURCORN',
    description: 'Coffee By Arthurcorn',
    image: 'https://picsum.photos/200',
    imageWidth: 300,
    imageHeight: 200,
  },
  twitter: {
    title: 'ARTHURCORN',
    description: 'Coffee By Arthurcorn',
    image: 'https://picsum.photos/200',
    imageAlt: 'Coffee By Arthurcorn',
  },
  line: {
    title: 'ARTHURCORN',
    description: 'Coffee By Arthurcorn',
    image: 'https://picsum.photos/200',
    imageWidth: 300,
    imageHeight: 200,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:image:width" content={metadata.openGraph.imageWidth.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.imageHeight.toString()} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:image:alt" content={metadata.twitter.imageAlt} />
        <meta property="al:web:url" content={metadata.line.image} />
        <meta property="al:web:should_fallback" content="true" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
