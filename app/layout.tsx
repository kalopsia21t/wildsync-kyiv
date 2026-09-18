import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";

import Header from "@components/Header/Header";
import Animation from "@components/Animation";
import Footer from "@components/Footer/Footer";
import { LocalizationProvider } from "@components/Localization/Localization";

import styles from "./page.module.css";

import "./globals.css";

const siteUrl = "https://wildsync.kyiv";

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
    title: {
    default: "Wildsync Kyiv — Jungle, Drum & Bass Events",
    template: "%s | Wildsync Kyiv",
  },
  icons: {
    icon: "/wildsync_sticker.jpg",
    shortcut: "/wildsync_sticker.jpg",
    apple: "/wildsync_sticker.jpg",
  },
  metadataBase: new URL(siteUrl),
  description:
    "Wildsync Kyiv presents underground Jungle, Drum & Bass, Breakbeat and Bass music events.",
  keywords: [
    "Wildsync",
    "Kyiv events",
    "Jungle",
    "Dance music",
    "Drum and Bass",
    "Breakbeat",
    "Bass music",
    "Ukraine",
    "Rave",
    "Underground",
    "Electronic music",
    "Nightlife",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "Wildsync Kyiv",
    title: "Wildsync Kyiv — Jungle, Drum & Bass Events",
    description:
      "Underground Jungle, Drum & Bass, Breakbeat and Bass music events in Kyiv.",
    images: [
      {
        url: "/wildsync_sticker.jpg",
        width: 1200,
        height: 630,
        alt: "Wildsync Kyiv",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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
