import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const messages = [
  {
    name: "alison mars",
    message: "How are you?",
    time: "6 days ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alison",
  },
  {
    name: "Richard John",
    message: "hi",
    time: "6 days ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=richard",
  },
  {
    name: "John Warren",
    message: "This is a Bluetooth speaker",
    time: "14 days ago",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    online: true,
  },
];

export const RightSidebar = () => {
  return (
    <aside className="w-[340px] p-6 space-y-6">
      {/* Sponsored Section */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <span className="text-sm font-medium text-muted-foreground">
            Sponsored
          </span>
        </div>
        <div className="p-4">
          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop"
            alt="Email marketing"
            className="w-full h-40 object-cover rounded-xl mb-3"
          />
          <h4 className="font-semibold text-foreground mb-1">
            Email marketing
          </h4>
          <p className="text-sm text-muted-foreground">
            Supercharge your marketing with a powerful, easy-to use platform
            built for results.
          </p>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <span className="text-sm font-semibold text-foreground">
            Recent Messages
          </span>
        </div>
        <div className="divide-y divide-border">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="p-4 hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={msg.avatar} />
                    <AvatarFallback>{msg.name[0]}</AvatarFallback>
                  </Avatar>
                  {msg.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-medium text-sm text-foreground truncate">
                      {msg.name}
                    </p>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {msg.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
