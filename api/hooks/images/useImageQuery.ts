import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { getImage, GetImageParams } from "@api";

export function useImageQuery({ id }: GetImageParams) {
  const queryKey = queryKeys.getImage(id);

  return useQuery({
    queryKey,
    queryFn: () => getImage({ id }),
  });
}
