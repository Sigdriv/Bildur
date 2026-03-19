import { getImages } from "@api";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";

export function useGetImages() {
  const queryKey = queryKeys.getImages;

  return useQuery({
    queryKey,
    queryFn: getImages,
  });
}
