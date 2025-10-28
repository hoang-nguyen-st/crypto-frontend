import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "@/pages/Feed/components/Post";
import { useAuth } from "@/contexts/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="h-[280px] relative overflow-hidden rounded-b-2xl">
        <img
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&h=280&fit=crop"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-card border-x border-b border-border rounded-b-2xl -mt-20 relative pt-20 pb-6 px-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-4">
            <Avatar className="h-32 w-32 border-4 border-card -mt-24">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=greatstack" />
              <AvatarFallback>GS</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-foreground">
                  Lam Hoang
                </h1>
                <CheckCircle2 className="h-6 w-6 text-primary fill-primary" />
              </div>
              <p className="text-muted-foreground mb-3">@lamhoang</p>
              <p className="text-foreground max-w-2xl leading-relaxed mb-3">
                🟢 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a
                time. ✨ Staying curious. Creating with purpose.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Da nang, Viet Nam</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined 22 days ago</span>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Edit
          </Button>
        </div>

        <div className="flex gap-8 mb-6">
          <div>
            <span className="text-2xl font-bold text-foreground">2</span>
            <span className="text-muted-foreground ml-2">Posts</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-foreground">6</span>
            <span className="text-muted-foreground ml-2">Followers</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-foreground">3</span>
            <span className="text-muted-foreground ml-2">Following</span>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full justify-start bg-transparent rounded-none h-auto">
            <TabsTrigger
              value="posts"
              className="rounded-lg border-transparent data-[state=active]:border-gray-200 data-[state=active]:bg-transparent px-8 py-3"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="rounded-lg border-transparent data-[state=active]:border-gray-200 data-[state=active]:bg-transparent px-8 py-3"
            >
              Media
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="rounded-lg border-transparent data-[state=active]:border-gray-200 data-[state=active]:bg-transparent px-8 py-3"
            >
              Likes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6 space-y-6">

            <PostCard
              author={user!.name}
              username={user!.id}
              avatar=""
              timeAgo="3 days ago"
              content="ABC"
              verified
            />

          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <p className="text-muted-foreground text-center py-8">
              No media yet
            </p>
          </TabsContent>
          <TabsContent value="likes" className="mt-6">
            <p className="text-muted-foreground text-center py-8">
              No liked posts yet
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
