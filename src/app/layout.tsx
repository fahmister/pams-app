import { GeistSans, GeistMono } from 'geist/font';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahmi Muhammad - Full Stack Developer",
  description: "Portfolio showcasing web development projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}