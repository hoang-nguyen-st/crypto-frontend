import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  author: string;
  username: string;
  avatar: string;
  timeAgo: string;
  content: string;
  image?: string;
  verified?: boolean;
}

export const PostCard = ({
  author,
  username,
  avatar,
  timeAgo,
  content,
  image,
  verified,
}: PostCardProps) => {
  const processedContent = content.replace(
    /#(\w+)/g,
    '<span class="text-primary font-medium">#$1</span>'
  );

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="p-4 flex items-start gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{author}</h3>
            {verified && (
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {username} · {timeAgo}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <p
          className="text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>

      {image && (
        <div className="px-4 pb-4">
          <img
            src={image}
            alt="Post content"
            className="w-full rounded-xl object-cover max-h-[500px]"
          />
        </div>
      )}

      <div className="px-4 pb-4 flex items-center gap-6">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors group">
          <Heart className="h-5 w-5 group-hover:fill-red-500" />
          <span className="text-sm">124</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">32</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Share2 className="h-5 w-5" />
          <span className="text-sm">18</span>
        </button>
        <button className="ml-auto text-muted-foreground hover:text-primary transition-colors">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
