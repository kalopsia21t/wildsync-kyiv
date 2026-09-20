"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";
import GalleryPhotoItem, { type GalleryPhoto } from "@components/GalleryPhotoItem/GalleryPhotoItem";
import styles from "@styles/media.module.css";
import { useImageLoaded } from "@hooks/useImageLoaded";

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { loaded: imageLoaded, handleLoad } = useImageLoaded(activeIndex);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const move = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + photos.length) % photos.length;
    });
  }, [photos.length]);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length > 1) return;
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    const SWIPE_THRESHOLD = 50;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    move(deltaX < 0 ? 1 : -1);
  };

  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);

      if (event.key === "Tab") {
        const focusable = lightboxRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, close, move]);

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
        <div ref={lightboxRef} className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Full-size photo" onClick={close}>
          <div className={styles.lightboxCounter} aria-live="polite">
            {activeIndex + 1} / {photos.length}
          </div>
          <button ref={closeButtonRef} type="button" className={styles.lightboxClose} onClick={close} aria-label="Close photo">
            &times;
          </button>
          <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Previous photo">
            <span className={styles.lightboxArrowIcon} />
          </button>
          <div
            className={styles.lightboxImageWrap}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {!imageLoaded && <div className={styles.lightboxSpinner} aria-hidden="true" />}
            <CldImage
              src={photos[activeIndex].publicId}
              width={photos[activeIndex].width}
              height={photos[activeIndex].height}
              alt="Cloudinary Asset"
              sizes="100vw"
              className={`${styles.lightboxImage} ${imageLoaded ? styles.loaded : ""}`}
              onLoad={handleLoad}
            />
          </div>
          <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxNext}`} onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Next photo">
            <span className={`${styles.lightboxArrowIcon} ${styles.flip}`} />
          </button>
          {photos.length > 1 && (
            <div
              aria-hidden="true"
              style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}
            >
              <CldImage
                key={photos[(activeIndex - 1 + photos.length) % photos.length].publicId}
                src={photos[(activeIndex - 1 + photos.length) % photos.length].publicId}
                width={photos[(activeIndex - 1 + photos.length) % photos.length].width}
                height={photos[(activeIndex - 1 + photos.length) % photos.length].height}
                alt=""
                sizes="100vw"
              />
              <CldImage
                key={photos[(activeIndex + 1) % photos.length].publicId}
                src={photos[(activeIndex + 1) % photos.length].publicId}
                width={photos[(activeIndex + 1) % photos.length].width}
                height={photos[(activeIndex + 1) % photos.length].height}
                alt=""
                sizes="100vw"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}