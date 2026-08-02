import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Al Ghazi Basri — Full-stack Web Developer",
  description:
    "Full-stack web developer specializing in React, Next.js, and Node.js. Building reliable, business-ready web applications.",
  openGraph: {
    title: "Mohammad Al Ghazi Basri — Full-stack Web Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}