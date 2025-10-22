import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from "lucide-react";

const connections = [
  {
    name: "alison mars",
    username: "@alison",
    bio: "Hey there! I am using PingUp....",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alison",
  },
  {
    name: "Richard John",
    username: "@richard",
    bio: "🟢 Dreamer | 🎓 Learner | 📚 Do...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=richard",
  },
  {
    name: "Alex Morgan",
    username: "@alexm_dev",
    bio: "Software Developer in the Uni...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  },
  {
    name: "Thomas Earl",
    username: "@thomas_cox",
    bio: "Hey there! I am using PingUp....",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=thomas",
  },
  {
    name: "John Warren",
    username: "@john_warren",
    bio: "🟢 Dreamer | 📚 Learner | 🚀 D...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  {
    name: "James Smith",
    username: "@james_smith",
    bio: "Hey there! I am using PingUp....",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
  {
    name: "Thomas Earl",
    username: "@thomas_cox",
    bio: "Hey there! I am using PingUp....",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=thomas",
  },
  {
    name: "John Warren",
    username: "@john_warren",
    bio: "🟢 Dreamer | 📚 Learner | 🚀 D...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  {
    name: "James Smith",
    username: "@james_smith",
    bio: "Hey there! I am using PingUp....",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
];

const Connections = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground mb-2">Connections</h1>
      <p className="text-muted-foreground mb-8">
        Manage your network and discover new connections
      </p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-1">6</div>
          <div className="text-muted-foreground">Followers</div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-1">3</div>
          <div className="text-muted-foreground">Following</div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-1">1</div>
          <div className="text-muted-foreground">Pending</div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-1">4</div>
          <div className="text-muted-foreground">Connections</div>
        </div>
      </div>

      <Tabs defaultValue="followers" className="w-full">
        <TabsList className="bg-card border border-border mb-6 p-1">
          <TabsTrigger value="followers" className="gap-2">
            <Users className="h-4 w-4" />
            Followers
          </TabsTrigger>
          <TabsTrigger value="following" className="gap-2">
            <Users className="h-4 w-4" />
            Following
          </TabsTrigger>
          <TabsTrigger value="pending" className="gap-2">
            <Users className="h-4 w-4" />
            Pending
          </TabsTrigger>
          <TabsTrigger value="connections" className="gap-2">
            <Users className="h-4 w-4" />
            Connections
          </TabsTrigger>
        </TabsList>

        <TabsContent value="followers">
          <div className="grid grid-cols-3 gap-6">
            {connections.map((connection, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={connection.avatar} />
                    <AvatarFallback>{connection.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground mb-1">
                    {connection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {connection.username}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {connection.bio}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="following">
          <div className="grid grid-cols-3 gap-6">
            {connections.slice(0, 3).map((connection, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={connection.avatar} />
                    <AvatarFallback>{connection.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground mb-1">
                    {connection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {connection.username}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {connection.bio}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <p className="text-center text-muted-foreground py-8">
            No pending connections
          </p>
        </TabsContent>

        <TabsContent value="connections">
          <div className="grid grid-cols-3 gap-6">
            {connections.slice(0, 4).map((connection, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={connection.avatar} />
                    <AvatarFallback>{connection.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground mb-1">
                    {connection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {connection.username}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {connection.bio}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Connections;
