import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Mate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-auto w-full max-w-[1200px] max-xl:px-10 ">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
