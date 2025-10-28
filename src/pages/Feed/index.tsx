import { cn } from "@/lib/utils";
import { StoryCard, PostCard } from "./components";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "@/graphql/queries";
import { useAuth } from "@/contexts";
import type { GetPostsResponse } from "@/interfaces";

const Feed = () => {
  const { user } = useAuth();
  const { data, loading, error } = useQuery<GetPostsResponse>(GET_ALL_POSTS);
  const posts = data?.posts || [];

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
        posts
        .slice()
        .reverse()
        .map((post) => (
          <PostCard
            key={post.id}
            author={user!.name}
            username="@undefined" 
            avatar="" 
            timeAgo="2 days ago" 
            content={post.content}
            image={post.thumbnail} 
            verified={false} 
          />
        ))
      ) : (
        <div className="text-center text-muted-foreground py-8">
          No posts available
        </div>
      )}
      
    </div>
  );
};

export default Feed;
