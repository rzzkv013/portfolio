import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Javohir Abdurazzoqov — Frontend React dasturchi",
  description:
    "Javohir Abdurazzoqov portfoliysi — puxta va qulay raqamli tajribalar yaratuvchi frontend React dasturchi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${syne.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
