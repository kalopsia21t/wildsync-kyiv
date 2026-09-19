import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "%s | Wildsync Kyiv",
  },
}

export default function AboutPage() {
    return <AboutContent />;
}