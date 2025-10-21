import { useState } from "react";
import { Search, MapPin, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const users = [
  {
    name: "James Smith",
    username: "@james_smith",
    bio: "Hey there! I am using PingUp.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    followers: 0,
    following: false,
  },
  {
    name: "Sarah Wilson",
    username: "@sarah_w",
    bio: "Creative designer & artist 🎨",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    followers: 245,
    following: false,
  },
  {
    name: "Mike Johnson",
    username: "@mikej",
    bio: "Tech enthusiast | Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    followers: 128,
    following: false,
  },
];

const Discover = () => {
  const [followingStates, setFollowingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleFollow = (index: number) => {
    setFollowingStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-[1200px] mx-auto py-6 px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Discover People
          </h1>
          <p className="text-muted-foreground">
            Connect with amazing people and grow your network
          </p>
        </div>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search people by name, username, bio, or location..."
          className="pl-12 h-14 bg-card border-border rounded-2xl text-base"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {user.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {user.username}
              </p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {user.bio}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{user.followers} Followers</span>
              </div>
              <div className="flex gap-2 w-full">
                <Button
                  onClick={() => toggleFollow(index)}
                  className={
                    followingStates[index]
                      ? "flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                      : "flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                  }
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  {followingStates[index] ? "Following" : "Follow"}
                </Button>
                <Button variant="outline" size="icon" className="border-border">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
