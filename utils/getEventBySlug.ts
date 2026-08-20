import { GalleryEventT } from '@data/galleryevents';
import { EventT } from '@data/events';

export function getEventBySlug(events: GalleryEventT[] | EventT[], slug: string) {
  return events.find((event: GalleryEventT | EventT) => event.slug === slug) || null;
}