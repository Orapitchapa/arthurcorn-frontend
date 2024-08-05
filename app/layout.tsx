import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ARTHURCORN",
  description: "Coffee By Arthurcorn",
  openGraph: {
    title: "ARTHURCORN",
    description: "Coffee By Arthurcorn",
    images: [
      {
        url: "https://arthurcorn-coffee.netlify.app/img/logo.jpg", // URL ของรูปภาพในโฟลเดอร์ public
        width: 800,
        height: 600,
        alt: "Logo Arthurcorn",
      },
    ],
  },
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
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
