"use client";

import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={`${openSans.variable}`}>
        <body>
          <SessionProvider>{children}</SessionProvider>
        </body>
      </html>
    </>
  );
}
