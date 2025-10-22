import { type ChangeEvent, type FormEvent, useRef } from "react";
import { Image } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/libraries/utils";

const CreatePost = () => {
  const textTareaInput = useRef<HTMLTextAreaElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      content: textTareaInput.current?.value,
      thumbnail: null,
    };

    console.log(formData);
  };

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Create Post</h1>
        <p className="text-muted-foreground">
          Share your thoughts with the world
        </p>
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
        <form onSubmit={handleSubmit}>
          <Textarea
            ref={textTareaInput}
            placeholder="What's happening?"
            className="min-h-[200px] resize-none border-border text-base"
          />
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div
              className={cn(
                "h-10 w-10 hover:bg-gray-300 flex items-center justify-center transition rounded-md cursor-pointer"
              )}
            >
              <input
                ref={fileInput}
                onChange={handleFileChange}
                type="file"
                hidden
              />
              <Image
                onClick={handleClick}
                size={30}
                className={cn("text-muted-foreground")}
              />
            </div>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8">
              Publish Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
