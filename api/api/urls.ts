export const urls = {
  getImages: "/api/images",
  getImage: (id: string) => `/api/images/${id}`,
  uploadImage: "/api/images",
} as const;
