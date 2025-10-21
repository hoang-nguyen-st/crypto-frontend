import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Create Post</h1>
        <p className="text-muted-foreground">Share your thoughts with the world</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=greatstack" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">Lam Hoang</p>
            <p className="text-sm text-muted-foreground">@lamhoang</p>
          </div>
        </div>

        <Textarea
          placeholder="What's happening?"
          className="min-h-[200px] resize-none border-border text-base"
        />

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Image className="h-5 w-5" />
          </Button>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8">
            Publish Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
