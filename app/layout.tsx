import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceSans = Space_Grotesk({
  variable: "--font-space-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAFFI ACHMAD RIANDRI | Frontend-focused SDE",
  description: "CV Landing Page of Raffi Achmad Riandri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceSans.variable} ${jetbrainsMono.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
