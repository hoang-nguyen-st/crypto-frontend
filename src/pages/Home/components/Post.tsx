import { usePosts } from "@/hooks";

const Post = () => {
  const { data } = usePosts();
  console.log(data);
  return <></>;
};

export { Post };
