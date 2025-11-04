import { cn } from "@/lib/utils";
import { PostCard } from "./components";
import { useGetAllPosts } from "@/hooks";
import { calculateTimeAgo } from "@/helpers";

const Feed = () => {
  const { posts, loading, error } = useGetAllPosts();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;

  return (
    <div className={cn("space-y-6")}>
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
