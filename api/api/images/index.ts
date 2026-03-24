import { get, postForm } from "@http";
import { urls } from "../urls";
import type { PreviewImage, Image } from "./types";

export async function getImages() {
  const { images } = await get<{ images: PreviewImage[] }>({
    url: urls.getImages,
  });

  return images;
}

export interface GetImageParams {
  id: string;
}

export function getImage({ id }: GetImageParams): Promise<Image> {
  return get({ url: urls.getImage(id) });
}

export async function uploadImages(images: File[]) {
  for (const image of images) {
    const formData = new FormData();
    formData.append("file", image);

    await postForm({ url: urls.uploadImage, body: formData });
  }
}
