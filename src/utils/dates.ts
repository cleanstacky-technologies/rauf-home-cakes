import { MIN_ADVANCE_DAYS } from '@/data/products';

export function getMinPickupDate(): Date {
  const date = new Date();
  date.setDate(date.getDate() + MIN_ADVANCE_DAYS);
  return date;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
  });
}

export function toInputDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getAvailableDates(count: number = 14): Date[] {
  const dates: Date[] = [];
  const minDate = getMinPickupDate();

  for (let i = 0; i < count; i++) {
    const date = new Date(minDate);
    date.setDate(minDate.getDate() + i);
    dates.push(date);
  }

  return dates;
}
