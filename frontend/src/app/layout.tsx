import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Header from "./sections/header";
import Footer from "./sections/footer";

import { Manrope as Manrope } from "next/font/google"
import { Rubik as Rubik } from "next/font/google"




const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'], // Specify the weights you need

})

const fontManrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ['300', '400', '600', '700', '800'],
})

const fontRubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ['300', '400', '500', '600', '700', '800'],
})


export const metadata: Metadata = {
  title: "Kofuku-blog",
  description: "Kofuku",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />

      </head>
      <body className={`${fontSans.variable} ${fontManrope.variable} ${fontRubik.variable} bg-white font-manrope overscroll-none `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
