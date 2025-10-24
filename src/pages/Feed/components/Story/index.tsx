import { Plus } from "lucide-react";

interface StoryCardProps {
  image?: string;
  title?: string;
  timeAgo?: string;
  isCreate?: boolean;
}

export const StoryCard = ({
  image,
  title,
  timeAgo,
  isCreate,
}: StoryCardProps) => {
  if (isCreate) {
    return (
      <div className="w-[120px] h-[200px] rounded-2xl border-2 border-dashed border-border bg-card hover:bg-secondary transition-all cursor-pointer flex flex-col items-center justify-center gap-3 group">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
          <Plus className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          Create Story
        </span>
      </div>
    );
  }

  return (
    <div className="w-[120px] h-[200px] rounded-2xl overflow-hidden relative cursor-pointer group">
      <div
        className="w-[120px] h-[200px] rounded-2xl bg-cover bg-center relative hover:scale-105 hover:z-index overflow-hidden cursor-pointer transition-transform group"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/60" />
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center dark:bg-gray-800 dark:text-white dark:border-gray-600">
          <Zap className="h-5 w-5 text-white fill-white" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3">
          {title && (
            <p className="text-white text-xs font-medium mb-1 line-clamp-2">
              {title}
            </p>
          )}
          {timeAgo && <p className="text-white/80 text-xs">{timeAgo}</p>}
        </div>
      </div>
    </div>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
