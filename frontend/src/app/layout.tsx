import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'], // Specify the weights you need

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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={cn(
        " bg-white font-inter overscroll-none",
        fontSans.variable
      )}>
        {children}
      </body>
    </html>
  );
}
