import { uploadImages } from "@api";
import { TkError } from "@http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { HooksParams } from "../utils";

export function useUploadImages({ onSuccess }: HooksParams) {
  const queryClient = useQueryClient();

  return useMutation<void, TkError, File[]>({
    mutationFn: uploadImages,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getImages });

      onSuccess();
    },
  });
}
