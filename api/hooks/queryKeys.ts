export const queryKeys = {
  getImages: ["getImages"],
  getImage: (id: string) => ["getImage", id],
} as const;
