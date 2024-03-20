import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XXI Meeting - Booking",
  description: "Booking accommodations for XXI Meeting, courtesy of Hotel Barcelo Bavaro Palace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-10" style={{background: "#1E4677"}}></div>
        {children}
      </body>
    </html>
  );
}
