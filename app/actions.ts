'use server';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type CloudinaryPhoto = {
  publicId: string;
  displayName: string;
  secureUrl: string;
  width: number;
  height: number;
};

export async function getPhotosFromFolder(folderName: string): Promise<CloudinaryPhoto[] | null> {
  try {
    const resources = await cloudinary.search
      .expression(`asset_folder:"${folderName}" AND resource_type:image`)
      .max_results(50) 
      .sort_by('public_id','desc')
      .execute();

    return resources.resources.map((asset: any) => ({ // ts-ignore @typescript-eslint/no-explicit-any
      publicId: asset.public_id,
      displayName: asset.filename,
      secureUrl: asset.secure_url,
      width: asset.width,
      height: asset.height,
    }));
  } catch (error) {
    console.error('Failed to fetch photos from Cloudinary:', error);
    return null;
  }
}
