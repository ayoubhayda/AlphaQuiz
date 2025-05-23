export const formatRelativeTime = (inputDate: Date | string): string => {
  const now = new Date();
  const date = new Date(inputDate);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const { label, seconds: intervalSeconds } of intervals) {
    const count = Math.floor(seconds / intervalSeconds);
    if (count >= 1) {
      return `Posted ${count} ${label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'Posted just now';
};
