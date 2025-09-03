import "../Styles/Global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Jireh Custodio · Portfolio",
  description: "Clean, minimalist portfolio with smooth animations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F8F8] text-[#222222] antialiased`}>
        {children}
      </body>
    </html>
  );
}
