'use client';

import { Select as HeroSelect, SelectItem } from '@heroui/react';

interface Props<T> {
  options: { value: string; label: string }[];
  label: string;
  emptyText?: string;
  onChange: (value: T) => void;
  value: T;
  errorText?: string;
  isError?: boolean;
  isRequired?: boolean;
}

export function Select<T>({
  options,
  label,
  emptyText,
  onChange,
  errorText,
  value,
  isError = false,
  isRequired = false,
}: Props<T>) {
  const selectedKeys: Set<string> = Array.isArray(value)
    ? new Set(value)
    : value && options.some((option) => option.value === String(value))
      ? new Set([String(value)])
      : new Set();

  return (
    <HeroSelect
      aria-label={label}
      errorMessage={errorText}
      isInvalid={isError}
      isRequired={isRequired}
      items={options}
      label={label}
      listboxProps={{
        emptyContent: emptyText || `Ingen ${label.toLowerCase()} tilgjengelig`,
      }}
      placeholder={`Velg en ${label.toLowerCase()}`}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      onChange={({ target: { value } }) => onChange(value as T)}
    >
      {(option) => <SelectItem key={option.value}>{option.label}</SelectItem>}
    </HeroSelect>
  );
}
