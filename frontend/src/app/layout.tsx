import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Header from "./sections/header";
import Footer from "./sections/footer";

import { Manrope as Manrope } from "next/font/google"
import { Rubik as Rubik } from "next/font/google"
import { Overpass as Overpass } from "next/font/google"




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

const fontOverpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  weight: ['300', '400', '500', '600', '700', '800'],
})

const fontRubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ['300', '400', '500', '600', '700', '800'],
})


export const metadata: Metadata = {
  title: "Kofuku",
  description: "Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more",
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kofuku" />
        <meta property="og:image:width" content="420" />
        <meta property="og:image:height" content="207" />
        <meta property="og:image:alt" content="Kofuku" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:description" content="Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more" />
        
        <meta name="twitter:title" content="Kofuku" />
        <meta name="twitter:description" content="Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:text:title" content="Kofuku" />
       
      </head>
      <body className={`${fontSans.variable} ${fontOverpass.variable} ${fontManrope.variable} ${fontRubik.variable} bg-white font-manrope overscroll-none `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
