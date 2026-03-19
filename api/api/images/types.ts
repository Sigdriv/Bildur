export type Image = {
  id: string;
  name: string;
  mimeType: string;
  extension: string;
  storagePath: string;
  width: number;
  height: number;
  createdAt: string;
  greyScaleId?: string;
};

export type PreviewImage = {
  id: string;
  originalImageId: string;
  storagePath: string;
  width: number;
  height: number;
  createdAt: string;
  extension: string;
  name: string;
};
