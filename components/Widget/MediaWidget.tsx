"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import styles from "@styles/media.module.css";

import LocalizedText from '@components/Localization/LocalizedText';
import { useImageLoaded } from "@hooks/useImageLoaded";


type WidgetT = {
  title: string;
  slug: string;
  description: string;
  photo: {
    publicId: string;
    width: number;
    height: number;
  } | null;
};

export default function MediaWidget({ title, slug, description, photo }: WidgetT) {
  const { loaded, handleLoad } = useImageLoaded();

  return (
    <Link href={`/media/${slug}`} className={styles.mediaItem}>
      <div className={`${styles.mediaPreview} ${loaded ? "" : styles.imageSkeleton}`}>
        {photo ? (
          <CldImage
            src={photo.publicId}
            width={photo.width}
            height={photo.height}
            alt={title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`${styles.previewImage} ${loaded ? styles.loaded : ""}`}
            onLoad={handleLoad}
          />
        ) : (
          <p>No photos found.</p>
        )}
      </div>
      <div className={styles.mediaInfo}>
        <h2 className={styles.photoTitle}>
          <LocalizedText translationKey="photoReport" />
          {`: ${title}`}
        </h2>
        <p className={styles.photoDescription}>{description}</p>
      </div>
    </Link>
  );
}
