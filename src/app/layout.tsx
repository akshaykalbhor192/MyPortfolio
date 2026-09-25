import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Akshay Kalbhor — Frontend Developer",
  description:
    "Akshay Kalbhor is a frontend developer and creative technologist building fast, thoughtful interfaces with React, Next.js and data-driven products.",
};

// Runs before paint so the page never flashes the wrong theme on load.
// Defaults to light regardless of system preference — dark only applies if
// the visitor has explicitly toggled it before.
const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
