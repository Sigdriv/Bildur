import { get } from "@http";
import { urls } from "../urls";
import type { PreviewImage } from "./types";

export async function getImages() {
  const { images } = await get<{ images: PreviewImage[] }>({
    url: urls.getImages,
  });

  return images;
}
