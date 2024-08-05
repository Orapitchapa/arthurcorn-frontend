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
        <meta property="og:image" content="https://arthurcorn-coffee.netlify.app/img/logo.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
