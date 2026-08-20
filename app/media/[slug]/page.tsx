import { notFound } from "next/navigation";
import styles from "@styles/media.module.css";

import { getPhotosFromFolder } from '../../actions';
import GalleryPhotoItem from '@components/GalleryPhotoItem/GalleryPhotoItem';

import { galleryEvents } from "@data/galleryevents";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = galleryEvents.find((galleryEvent) => galleryEvent.slug === slug);

  if (!event) return notFound();

  const photos = await getPhotosFromFolder(event.folderName);

  if (!photos?.length) {
    return <p className={styles.emptyGallery}>No photos found in this folder.</p>;
  }

  return (
    <div className={styles.mediaContainer}>
      <h1>{event.title}</h1>

      <div className={styles.gallery}>
        {photos.map((photo) => (
          <GalleryPhotoItem key={photo.publicId} photo={photo} />
        ))}
      </div>
    </div>
  );
}
    