"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import styles from "@styles/media.module.css";

type WidgetT = {
  title: string;
  slug: string;
  description: string;
  photo: {
    publicId: string;
    width: number;
    height: number;
  } | null;
  action?: string;
};

export default function MediaWidget({ title, slug, description, photo, action }: WidgetT) {
  return (
    <article className={styles.mediaItem}>
      <div className={styles.mediaPreview}>
        {photo ? (
          <CldImage
            src={photo.publicId}
            width={photo.width}
            height={photo.height}
            alt={title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.previewImage}
          />
        ) : (
          <p>No photos found.</p>
        )}
      </div>
      <div className={styles.mediaInfo}>
        <h2 className={styles.photoTitle}>{title}</h2>
        <p className={styles.photoDescription}>{description}</p>
        {action && (
          <Link href={`/media/${slug}`} className={styles.photoAction}>
            {action}
          </Link>
        )}
      </div>
    </article>
  );
}
