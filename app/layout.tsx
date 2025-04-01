import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@components/Header/Header";
import Animation from "@components/Animation";
import Footer from "@components/Footer/Footer";

import styles from "./page.module.css";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildsync Kyiv",
  description: "Jungle, Drum & Bass and Breakbeat events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <div className={styles.animation}>
            <Animation />
          </div>
          <Header />
          <main className={styles.main}>
            {/* <div className={styles.mainInfo}>
              Wildsync is an series of an events, led by collaboration of DJ
              Maze and Mezzanine Kyiv Art Space, showcasing drum & bass, jungle
              and breakbeat music deeply rooted in the underground culture.
            </div> */}
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
