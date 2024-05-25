import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import React from "react";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackSingapore 2024",
  description: "Team Seeds of Six",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"flex flex-col"}>
      <body className={publicSans.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
