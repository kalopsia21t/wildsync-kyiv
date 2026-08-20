"use client";
import { CldImage } from "next-cloudinary";
import styles from "@styles/media.module.css";


type GalleryPhoto = {
    publicId: string;
    secureUrl: string;
    width: number;
    height: number;
};

export default function GalleryPhotoItem({ photo }: { photo: GalleryPhoto }) {
  return (
        <div className={styles.photoItem}>
            <a
                href={photo.secureUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open photo in original size"
            >
            <CldImage
                src={photo.publicId}
                width={photo.width}
                height={photo.height}
                alt="Cloudinary Asset"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                className={styles.photoImage}
            />
            </a>
        </div>
    );
}