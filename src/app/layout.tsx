import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Thomson — Software Engineer",
  description:
    "Portfolio of Harry Thomson, a software engineer building scalable web applications.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen w-full bg-canvas p-3 md:p-4 md:flex md:gap-4">
          <Sidebar />
          <main className="flex-1 min-w-0 mt-3 md:mt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
