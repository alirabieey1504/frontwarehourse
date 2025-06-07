import Header from "../../components/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Side from "../../components/Side";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="them" className={``}>
        <Header />
        <div className=" flex justify-between">
          {" "}
          {children}
          <Side />
        </div>
      </body>
    </html>
  );
}
