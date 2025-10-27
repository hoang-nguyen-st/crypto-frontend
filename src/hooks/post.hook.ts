import { ApolloError, useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { CREATE_POST } from "@/graphql";
import type { CreatePostDto } from "@/interfaces";
import { URL } from "@/constants";

const useCreatePost = () => {
  const navigate = useNavigate();

  const [createPostMutation, { loading }] = useMutation<
    { id: string },
    { input: CreatePostDto }
  >(CREATE_POST);

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

export { useCreatePost };
