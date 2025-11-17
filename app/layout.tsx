import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Research and academic portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Decorative teal elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-teal-300/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-teal-100/25 rounded-full blur-3xl"></div>
        </div>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-white via-teal-50/10 to-white relative z-10">
          {/* Additional visible teal decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-teal-200/35 rounded-full blur-2xl pointer-events-none"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
