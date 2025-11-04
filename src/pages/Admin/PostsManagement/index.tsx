import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Trash2,
  AlertCircle,
  ArrowLeft,
  FileText,
  Loader2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { type GetUserByPost, type GetPostsDto } from "@/interfaces";
import { useQueryUsers, useGetAllPosts, useDeletePostByAdmin } from "@/hooks";
import { calculateTimeAgo } from "@/helpers";
import { useSearchParams } from "react-router-dom";

interface UserWithPostCount extends GetUserByPost {
  postsCount: number;
}

const AdminPosts = () => {
  const {
    data: allPosts,
    loading: isPostsLoading,
    error: postsError,
  } = useGetAllPosts();
  const {
    data: allUsers,
    loading: isUsersLoading,
    error: usersError,
  } = useQueryUsers();

  const [selectedUser, setSelectedUser] = useState<UserWithPostCount | null>(
    null
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const urlUserId = searchParams.get("userId");
  const isLoading = isPostsLoading || isUsersLoading;
  const isError = postsError || usersError;
  const { handleDeletePost, isDeleting } = useDeletePostByAdmin();

  const [currentPosts, setCurrentPosts] = useState<GetPostsDto[]>([]);

  useEffect(() => {
    if (allPosts && allPosts.posts) {
      setCurrentPosts(allPosts.posts);
    }
  }, [allPosts]);

  const handleSubmit = async (postId: string) => {
    try {
      console.log(
        `Starting Delete post. PostID: ${postId}, PostUserID: ${urlUserId}`
      );
      await handleDeletePost(postId);
    } catch (error) {
      console.error("Post deletion failed:", error);
    }
  };

  const usersWithPostCount: UserWithPostCount[] =
    allUsers && currentPosts
      ? allUsers.map((user) => {
          const postsCount = currentPosts.filter(
            (post) => post.user.id === user.id
          ).length;
          return {
            ...user,
            postsCount,
          };
        })
      : [];

  const userPosts = selectedUser
    ? currentPosts.filter((post) => post.user.id === selectedUser.id)
    : [];
  if (isLoading) {
    return (
      <div className="container max-w-5xl mx-auto p-6 text-center py-20">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <p className="mt-4 text-muted-foreground">Loading users and posts...</p>
      </div>
    );
  }

  if (isError || !allUsers || !allPosts) {
    return (
      <div className="container max-w-5xl mx-auto p-6 text-center py-20">
        <AlertCircle className="h-8 w-8 mx-auto text-destructive" />
        <h2 className="mt-4 text-xl font-bold text-destructive">
          Error loading data
        </h2>
        <p className="text-muted-foreground">
          Failed to load users or posts from the backend.
        </p>
      </div>
    );
  }

  if (!selectedUser) {
    return (
      <div className="container max-w-5xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-foreground">
              Posts Manager
            </h1>
            <Badge variant="destructive" className="text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              Admin Only
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Select a user to view and manage their posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {usersWithPostCount.map((user) => (
            <div
              key={user.id}
              onClick={() => {
                setSelectedUser(user);
                setSearchParams({ userId: user.id });
              }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {user.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {user.email}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      {user.postsCount} posts
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => {
            setSelectedUser(null);
            setSearchParams({});
          }}
          className="mb-4 -ml-2 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to the user list
        </Button>
        <Badge variant="destructive" className="text-xs">
          <AlertCircle className="h-3 w-3 mr-1" />
          Admin Only
        </Badge>
      </div>

      <div className="space-y-4">
        {userPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              This user has not posted any articles yet.
            </p>
          </div>
        ) : (
          userPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4 flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {post.user.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {post.user.email} · {calculateTimeAgo(post.createdAt)}
                      </p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Confirm deletion of the post.
                          </DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this post? This
                            action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button
                              variant="outline"
                              className="mt-2 sm:mt-0 cursor-pointer"
                            >
                              Cancel
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button
                              onClick={() => handleSubmit(post.id)}
                              disabled={isDeleting}
                              className="bg-red-600 hover:text-white hover:bg-red-600 cursor-pointer"
                            >
                              Delete post
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4">
                <p className="text-foreground leading-relaxed">
                  {post.content}
                </p>
              </div>

              {post.thumbnail && (
                <div className="px-4 pb-4">
                  <img
                    src={post.thumbnail}
                    alt="Post content"
                    className="w-full rounded-xl object-cover max-h-[400px]"
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPosts;
