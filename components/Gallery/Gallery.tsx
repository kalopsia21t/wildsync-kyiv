"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import GalleryPhotoItem, { type GalleryPhoto } from "@components/GalleryPhotoItem/GalleryPhotoItem";
import styles from "@styles/media.module.css";

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + photos.length) % photos.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, photos.length]);

  return (
    <>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <GalleryPhotoItem
            key={photo.publicId}
            photo={photo}
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Full-size photo" onClick={close}>
          <div className={styles.lightboxCounter} aria-live="polite">
            {activeIndex + 1} / {photos.length}
          </div>
          <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close photo">
            &times;
          </button>
          <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Previous photo">
            &#8592;
          </button>
          <div className={styles.lightboxImageWrap} onClick={(event) => event.stopPropagation()}>
            <CldImage
              src={photos[activeIndex].publicId}
              width={photos[activeIndex].width}
              height={photos[activeIndex].height}
              alt="Cloudinary Asset"
              sizes="100vw"
              className={styles.lightboxImage}
            />
          </div>
          <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxNext}`} onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Next photo">
            &#8594;
          </button>
        </div>
      )}
    </>
  );
}