import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { CREATE_POST } from "@/graphql";
import type { CreatePostDto, GetPostsResponse } from "@/interfaces";
import { URL } from "@/constants";
import { GET_ALL_POSTS } from "@/graphql/queries";

const useCreatePost = () => {
  const navigate = useNavigate();
  const [createPostMutation, { loading }] = useMutation<
    { id: string },
    { input: CreatePostDto }
  >(CREATE_POST, {
    refetchQueries: [{ query: GET_ALL_POSTS }],
  });

  const handleCreatePost = async (payload: CreatePostDto) => {
    await toast.promise(
      (async () => {
        const { data } = await createPostMutation({
          variables: { input: payload },
        });
        navigate(URL.FEED);
        return data;
      })(),
      {
        loading: "Trying to create post...",
        success: () => "Created post successfully!",
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An unexpected error occurred while creating post!"
          );
        },
      }
    );
  };

  return { handleCreatePost, loading };
};

const useGetPosts = () => {
  const { data, loading, error } = useQuery<GetPostsResponse>(GET_ALL_POSTS);
  const posts = data?.posts || [];
  return { posts, loading, error };
}

export { useCreatePost, useGetPosts };
