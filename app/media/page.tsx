import styles from '@styles/media.module.css';
import MediaWidget from '@components/Widget/MediaWidget';
import { getPhotosFromFolder } from '../actions';
import { galleryEvents } from '@data/galleryevents';
import LocalizedText from '@components/Localization/LocalizedText';

const mediaItems = await Promise.all(
  galleryEvents.map(async (event) => ({
    event,
    photo: (await getPhotosFromFolder(event.folderName))?.[0] ?? null,
  })),
);

export default function Media() {
  return (
    <div className={styles.mediaContainer}>
      <h1><LocalizedText translationKey="mediaTitle" /></h1>
      <p><LocalizedText translationKey="mediaIntro" /></p>

      <section className={styles.mediaGrid}>
        {mediaItems.map(({ event, photo }) => (
          <MediaWidget
            key={event.slug}
            title={event.title}
            slug={event.slug}
            description={event.description}
            photo={photo}
          />
        ))}
      </section>
    </div>
  );
}