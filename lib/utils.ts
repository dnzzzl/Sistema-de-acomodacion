import { type ClassValue, clsx } from "clsx"
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDateInRange(range:DateRange, set_range:DateRange = {from: new Date(2024,3,10), to: addDays(new Date(2024, 3, 10), 3)}) {
  if (range.to && set_range.to && range.from && set_range.from) {
    return range.from < set_range.to && range.to > set_range.from && range.to >= addDays(range.from, 3);
  }
}
