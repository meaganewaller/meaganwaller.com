export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
