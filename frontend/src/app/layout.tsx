import "./globals.css";
import Header from "./sections/header";
import Footer from "./sections/footer";
import { Manrope as Manrope } from "next/font/google"


const fontManrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ['300', '400', '600', '700', '800'],
})



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
        <meta property="og:image:width" content="420" />
        <meta property="og:image:height" content="207" />
        <meta property="og:image:alt" content="Kofuku" />
        <meta property="og:image:type" content="image/jpeg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:text:title" content="Kofuku" />
       
      </head>
      <body className={` ${fontManrope.variable} bg-white font-body overscroll-none `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
