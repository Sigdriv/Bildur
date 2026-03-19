'use client';

import type { DateValue, RangeValue } from '@heroui/react';
import { DateRangePicker as HeroDateRangerPicker } from '@heroui/react';
import { parseDate } from '@internationalized/date';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface Props {
  label: string;
  onChange: (value: DateRange) => void;
  value: DateRange;
  minDate?: Date | null;
  maxDate?: Date | null;
}
export function DateRangePicker({ label, onChange, value, minDate, maxDate }: Props) {
  const heroValue: RangeValue<DateValue> | undefined =
    value.start && value.end
      ? {
          start: parseDate(value.start.toISOString().split('T')[0]),
          end: parseDate(value.end.toISOString().split('T')[0]),
        }
      : undefined;

  return (
    <HeroDateRangerPicker
      firstDayOfWeek="mon"
      label={label}
      maxValue={maxDate ? parseDate(maxDate.toISOString().split('T')[0]) : undefined}
      minValue={minDate ? parseDate(minDate.toISOString().split('T')[0]) : undefined}
      value={heroValue}
      onChange={(value) =>
        onChange({
          start: value?.start ? value.start.toDate('UTC') : null,
          end: value?.end ? value.end.toDate('UTC') : null,
        })
      }
    />
  );
}
