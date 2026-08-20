import { GalleryEventT } from '@data/galleryevents';
import { EventT } from '@data/events';

type EventRecord = GalleryEventT | EventT;

export function getEventBySlug<T extends EventRecord>(events: T[], slug: string): T | null {
  return events.find((event) => event.slug === slug) || null;
}