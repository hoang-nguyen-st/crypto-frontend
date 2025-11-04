export const calculateTimeAgo = (createdAt: string): string => {
  const now = new Date();
  const postDate = new Date(createdAt);
  const diffInMs = now.getTime() - postDate.getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  const diffInMinutes = Math.floor(diffInMs / minute);
  const diffInHours = Math.floor(diffInMs / hour);
  const diffInDays = Math.floor(diffInMs / day);
  const diffInYears = Math.floor(diffInMs / year);

  if (diffInMinutes < 1) return "just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInHours < 24) return `${diffInHours}h ago`;
  if (diffInDays < 7) return `${diffInDays}d ago`;

  if (diffInYears >= 1) return `${diffInYears}y ago`;

  return postDate.toLocaleDateString("en-US");
};
