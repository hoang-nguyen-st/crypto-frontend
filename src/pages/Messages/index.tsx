import { Eye, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const conversations = [
  {
    name: "Yuta Hirobe",
    username: "@yuta0329",
    message: "Assassino Cappuccino is here.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=richard",
  },
  {
    name: "alison mars",
    username: "@alison",
    message: "Hey there! I am using PingUp.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alison",
  },
  {
    name: "Alex Morgan",
    username: "@alexm_dev",
    bio: "Software Developer in the United States, building scalable web applications.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  },
  {
    name: "John Warren",
    username: "@john_warren",
    bio: "🟢 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨ Staying curious. Creating with purpose.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
];

const Messages = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-foreground mb-2">Messages</h1>
      <p className="text-muted-foreground mb-8">
        Talk to your friends and family
      </p>

      <div className="space-y-4">
        {conversations.map((conversation, index: number) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback>{conversation.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1">
                  {conversation.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {conversation.username}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {conversation.message || conversation.bio}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Eye className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
