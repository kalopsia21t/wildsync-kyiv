"use client";
import { CldImage } from "next-cloudinary";
import styles from "@styles/media.module.css";


type GalleryPhoto = {
    publicId: string;
    secureUrl: string;
    width: number;
    height: number;
};

export default function GalleryPhotoItem({
    photo,
    onOpen,
}: {
    photo: GalleryPhoto;
    onOpen: () => void;
}) {
  return (
    <div className={styles.photoItem}>
      <button type="button" className={styles.photoButton} onClick={onOpen} aria-label="Open photo">
        <CldImage
          src={photo.publicId}
          width={photo.width}
          height={photo.height}
          alt="Cloudinary Asset"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
          className={styles.photoImage}
        />
      </button>
    </div>
  );
}

export type { GalleryPhoto };