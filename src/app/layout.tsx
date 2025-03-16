import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load font Poppins dengan weight yang diperlukan
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins", // Menggunakan CSS variable untuk font
});

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
      <body className={`${poppins.variable} font-poppins bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}