"use client";

import { useParams } from "next/navigation";

export default function EventPage() {
  const { eventId } = useParams();
  return <>EventPage {eventId}</>;
}
