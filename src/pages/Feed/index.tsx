import { cn } from "@/libraries/utils";
import { PostCard } from "./components";

const Feed = () => {
  return (
    <div className={cn("space-y-6")}>
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
