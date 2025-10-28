import { cn } from "@/lib/utils";
import { StoryCard, PostCard } from "./components";

const Feed = () => {
  return (
    <div className={cn("space-y-6")}>
      <div className="mb-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        <StoryCard isCreate />
        <StoryCard
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
          timeAgo="21 minutes ago"
        />
        <StoryCard
          image="https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=600&fit=crop"
          title="The latest co..."
          timeAgo="21 minutes ago"
        />
        <StoryCard
          image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop"
          timeAgo="23 minutes ago"
        />
      </div>

      <PostCard
        author={"Lam Hoang"}
        avatar={""}
        content={"Capuchino"}
        timeAgo="2 days ago"
        username={"Lam Hoang"}
        verified={true}
      />
      
    </div>
  );
};

export default Feed;
