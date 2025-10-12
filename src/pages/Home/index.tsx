import { cn } from "@/libraries/utils";
import { Post } from "./components";

const Home = () => {
  return (
    <div className={cn("my-10")}>
      <div className={cn("text-center")}>
        <h1 className={cn("text-4xl font-bold")}>The Crypto Blog</h1>
        <p className={cn("text-base text-gray-500")}>
          A blog about binance, experiences and secrets.
        </p>
      </div>
      <Post />
    </div>
  );
};

export default Home;
