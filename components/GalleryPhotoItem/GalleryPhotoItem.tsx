"use client";
import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import styles from "@styles/media.module.css";


type GalleryPhoto = {
    publicId: string;
    secureUrl: string;
    width: number;
    height: number;
};

export default function GalleryPhotoItem({ photo }: { photo: GalleryPhoto }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

  return (
        <div className={styles.photoItem}>
            <button
                type="button"
                className={styles.photoButton}
                onClick={() => setIsOpen(true)}
                aria-label="Open photo"
            >
                <CldImage
                    src={photo.publicId}
                    width={photo.width}
                    height={photo.height}
                    alt="Cloudinary Asset"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    className={styles.photoImage}
                />
            </button>

            {isOpen && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Full-size photo"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        onClick={() => setIsOpen(false)}
                        aria-label="Close photo"
                    >
                        &times;
                    </button>
                    <div
                        className={styles.lightboxImageWrap}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <CldImage
                            src={photo.publicId}
                            width={photo.width}
                            height={photo.height}
                            alt="Cloudinary Asset"
                            sizes="100vw"
                            className={styles.lightboxImage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}