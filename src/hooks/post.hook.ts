import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { CREATE_POST } from "@/graphql";
import type { CreatePostDto, GetPostsResponse } from "@/interfaces";
import { URL } from "@/constants";
import { createPostSchema } from "@/validations";
import type { ValidationError } from "yup";
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
    try {
      await createPostSchema.validate(payload, { abortEarly: false });
    } catch (error) {
      const err = error as ValidationError;
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((e) => {
          if (e.message) {
            toast.error(e.message, { position: "top-right" });
          }
        });
      }
      return;
    }

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
