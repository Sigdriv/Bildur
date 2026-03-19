"use client";

import { Button } from "@heroui/react";
import { useRef } from "react";

interface Props {
  label: string;
  value: File[] | undefined;
  onChange: (files: File[] | undefined) => void;
  errorText?: string;
  isError?: boolean;
}

export function FileInput({
  label,
  value,
  onChange,
  errorText,
  isError,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || undefined;

    const newFiles = files ? Array.from(files) : undefined;

    onChange(newFiles);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        onChange={handleFileChange}
        multiple
        accept={"image/*"}
      />

      <Button
        color={isError ? "danger" : "default"}
        variant="bordered"
        onPress={handleClick}
        className="h-fit py-2"
        fullWidth
      >
        {!!value && (
          <div className="flex flex-col gap-1 whitespace-normal">
            {value.map(({ name }) => (
              <span key={name} className="text-sm">
                {name}
              </span>
            ))}
          </div>
        )}

        {!value && <span>{label}</span>}
      </Button>

      {isError && errorText && (
        <span className="text-sm text-danger">{errorText}</span>
      )}
    </div>
  );
}
