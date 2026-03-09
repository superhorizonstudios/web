import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "ARK | Precision Engineered",
  description: "ARK is a premium global performance technology ecosystem. Where instinct meets reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-arkBg text-gray-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
