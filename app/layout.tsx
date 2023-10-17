import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";

import Header from "@/components/Header";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto_sans_kr",
});

export const metadata: Metadata = {
  title: "Mott can go!",
  description: "Pet friednly Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <Script src="https://kit.fontawesome.com/d6116182ff.js"></Script>
      <body className={`${roboto.variable} ${noto_sans_kr.variable} h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
