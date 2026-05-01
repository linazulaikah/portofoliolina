import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lina Zulaikah — Computer Science Researcher & Tech Analyst",
  description:
    "Computer Science researcher and tech analyst working on AI, ERP, and data-driven systems. Master's at Istanbul Technical University.",
  authors: [{ name: "Lina Zulaikah" }],
  openGraph: {
    title: "Lina Zulaikah — Computer Science Researcher & Tech Analyst",
    description:
      "Computer Science researcher and tech analyst working on AI, ERP, and data-driven systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
