'use client';

import { useRef } from 'react';

import { Button } from '..';

interface Props {
  label: string;
  value: File | undefined;
  onChange: (file: File | undefined) => void;
  errorText?: string;
  isError?: boolean;
}

export function FileInput({ label, value, onChange, errorText, isError }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || undefined;

    onChange(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-2">
      <input ref={inputRef} className="hidden" type="file" onChange={handleFileChange} />

      <Button color={isError ? 'danger' : 'default'} variant="bordered" onClick={handleClick}>
        {value?.name || label}
      </Button>

      {isError && errorText && <span className="text-sm text-danger">{errorText}</span>}
    </div>
  );
}
