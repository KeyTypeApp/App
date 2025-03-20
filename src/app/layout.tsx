import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { ConfProvider } from "@/context/confContext";
import InitConf from "@/components/InitConf";
import dbConf from "@/conf/dbConf";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "key-type",
  description: "タイピングゲーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfProvider>
      <html lang="ja">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
        >
          <InitConf dbConf={dbConf} />
          <Header />
          {children}
        </body>
      </html>
    </ConfProvider>
  );
};