export type GalleryEventT = {
  slug: string;
  title: string;
  img: string;
  date: string;
  location: string;
  description: string;
  folderName: string;
};

export const galleryEvents: GalleryEventT[] = [
  {
    slug: "wildsync-04-10-2025-hvlv",
    title: "Wildsync 04/10/2025 (HVLV)",
    img: "/posters/04_10_2025_HVLV.jpg",
    date: "4 October 2025",
    location: "HVLV",
    description: "Photos by r_e_a_d_e_r.",
    folderName: "wildsync/events/2025-10-04-wildsync/media"
  },  
  {
    slug: "wildsync-10-08-2025-hvlv",
    title: "Wildsync 10/08/2025 (HVLV)",
    img: "/posters/10_08_2025_HVLV.jpg",
    date: "10 August 2025",
    location: "HVLV",
    description: "Photos by Oleksandra Horokhovska.",
    folderName: "wildsync/events/2025-08-10-wildsync/media"
  },
];