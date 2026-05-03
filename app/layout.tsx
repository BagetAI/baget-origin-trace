import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

const lato = Lato({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Origin Trace | Ethical Coffee Subscription",
  description: "Curated, ethically sourced coffee beans from small, independent roasters worldwide. Coffee you can trace to the picker's wage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${lato.variable} retro-grain antialiased`}>
        {children}
      </body>
    </html>
  );
}