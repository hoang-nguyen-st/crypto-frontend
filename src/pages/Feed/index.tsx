import { cn } from "@/lib/utils";
import { StoryCard, PostCard } from "./components";
import { useGetAllPosts } from "@/hooks";
import { calculateTimeAgo } from "@/helpers";

const Feed = () => {
  const { posts, loading, error } = useGetAllPosts();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;

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
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            author={post.user.name || "Unknown"}
            username={post.user?.email || "unknown"}
            avatar={post.user?.avatar || ""}
            timeAgo={calculateTimeAgo(post.createdAt || "")}
            image={post?.thumbnail || undefined}
            content={post.content}
          />
        ))
      ) : (
        <div>No posts available.</div>
      )}
    </div>
  );
};

export default Feed;
