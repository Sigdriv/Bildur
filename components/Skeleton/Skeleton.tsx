'use client';

import { Skeleton as HeroSkeleton } from '@heroui/react';

import { Select } from '../Select/Select';
import { TextInput } from '../TextInput/TextInput';

type SelectElement = 'textInput' | 'select';

type BaseProps = {
  isLoading: boolean;
  className?: string;
};

type ChildrenProps = {
  children: React.ReactNode;
  elements?: never;
};

type ElementProps = {
  children?: never;
  elements: SelectElement[];
};

type Props = BaseProps & (ChildrenProps | ElementProps);

export function Skeleton({ children, isLoading, elements, className }: Props) {
  if (!isLoading) return children;

  if (children) {
    return (
      <HeroSkeleton className={`rounded-medium w-full ${className}`} isLoaded={!isLoading}>
        {children}
      </HeroSkeleton>
    );
  }

  if (elements) {
    return elements.map((element, index) => {
      return (
        <HeroSkeleton
          key={`${element}-${index}`}
          className="rounded-medium w-fit mb-4"
          isLoaded={!isLoading}
        >
          {element === 'textInput' && (
            <TextInput label="Label" type="text" value="" onChange={() => {}} />
          )}

          {element === 'select' && (
            <Select label="Label" options={[]} value={undefined} onChange={() => {}} />
          )}
        </HeroSkeleton>
      );
    });
  }
}
