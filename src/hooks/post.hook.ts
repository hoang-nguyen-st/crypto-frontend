import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/graphql";
import type { Post } from "@/interfaces";

const usePosts = () =>
  useQuery<Post>(GET_POSTS, {
    variables: {},
  });

export { usePosts };
