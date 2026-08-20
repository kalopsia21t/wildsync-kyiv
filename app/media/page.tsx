import styles from '@styles/media.module.css';
import MediaWidget from '@components/Widget/MediaWidget';
import { getPhotosFromFolder } from '../actions';
import { galleryEvents } from '@data/galleryevents';

const mediaItems = await Promise.all(
  galleryEvents.map(async (event) => ({
    event,
    photo: (await getPhotosFromFolder(event.folderName))?.[0] ?? null,
  })),
);

export default function Media() {
  return (
    <div className={styles.mediaContainer}>
      <h1>Media</h1>
      <p>Check out our archive for photos!</p>

      <section className={styles.mediaGrid}>
        {mediaItems.map(({ event, photo }) => (
          <MediaWidget
            key={event.slug}
            title={event.title}
            slug={event.slug}
            description={event.description}
            photo={photo}
            action="View photos"
          />
        ))}
      </section>
    </div>
  );
}