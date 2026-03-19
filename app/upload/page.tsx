"use client";

import { Button, Card, FileInput, Form, Text } from "@components";
import { useUploadImages } from "@hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Upload() {
  const router = useRouter().push;

  const [files, setFiles] = useState<File[]>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { mutate, isPending } = useUploadImages({
    onSuccess: () => router("/images"),
  });

  const handleSubmit = () => {
    if (!files) {
      setErrorMessage("Ingen filer valgt");
      return;
    }

    mutate(files);
  };

  return (
    <Card align="center" header="Last opp bilder">
      <Form action="submit" onAction={handleSubmit}>
        <div className="flex flex-col gap-4 w-lg">
          <FileInput
            label="Velg bilder"
            value={files}
            onChange={(files) => {
              setErrorMessage(undefined);
              setFiles(files);
            }}
            errorText={errorMessage}
            isError={!!errorMessage}
          />
        </div>

        <div className="flex flex-row gap-2 w-full">
          <Button isLoading={isPending} type="submit" variant="solid">
            Last opp
          </Button>
        </div>
      </Form>
    </Card>
  );
}
