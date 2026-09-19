import type { Metadata } from "next";

import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | Wildsync Kyiv",
  },
}

export default function Home() {
  return <HomeContent />;
}
