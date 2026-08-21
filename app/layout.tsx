import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";

import Header from "@components/Header/Header";
import Animation from "@components/Animation";
import Footer from "@components/Footer/Footer";
import { LocalizationProvider } from "@components/Localization/Localization";

import styles from "./page.module.css";

import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["cyrillic", "latin"],
});

const displayFont = Unbounded({
  variable: "--font-display",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <LocalizationProvider>
          <div className={styles.page}>
            <div className={styles.animation}>
              <Animation />
            </div>
            <Header />
            <main className={styles.main}>
              {children}
            </main>

            <Footer />
          </div>
        </LocalizationProvider>
      </body>
    </html>
  );
}
