import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "@/contexts";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { CREATE_POST } from "@/graphql";
import type {
  CreatePostDto,
  GetPostsResponse,
  GetOwnPostsResponse,
  GetPostsByAdminResponse,
} from "@/interfaces";
import { URL } from "@/constants";
import { createPostSchema } from "@/validations";
import type { ValidationError } from "yup";
import {
  GET_ALL_POSTS,
  GET_OWN_POSTS,
  GET_POSTS_BY_ADMIN,
  GET_ALL_USERS,
} from "@/graphql/queries";
import { DELETE_POST_BY_ADMIN } from "@/graphql/mutations";

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

const useGetAllPosts = () => {
  const { data, loading, error } = useQuery<GetPostsResponse>(GET_ALL_POSTS);
  const posts = data?.posts || [];

  return { posts, data, loading, error };
};

const useGetOwnPosts = () => {
  const { data, loading, error } = useQuery<GetOwnPostsResponse>(GET_OWN_POSTS);
  const posts = data?.getPostBelongToUser || [];

  return { posts, loading, error };
};

const useGetPostsByAdmin = () => {
  const { user } = useAuth();
  const userId = user?.id;
  const adminInput = {
    userId,
  };
  const { data, loading, error } = useQuery<GetPostsByAdminResponse>(
    GET_POSTS_BY_ADMIN,
    {
      variables: {
        input: adminInput,
      },
      fetchPolicy: "network-only",
    }
  );
  const posts = data?.getPostBelongToUserByAdmin || [];
  return { data, posts, loading, error };
};

const useDeletePostByAdmin = () => {
  const { user } = useAuth();
  const userId = user?.id;

  const [deletePostMutation, { loading, error }] = useMutation(
    DELETE_POST_BY_ADMIN,
    {
      refetchQueries: [{ query: GET_ALL_POSTS }, { query: GET_ALL_USERS }],
    }
  );

  const handleDeletePost = async (postId: string) => {
    if (!userId) {
      toast.error("Error: UserID is undefined.", {
        position: "top-right",
      });
      return;
    }

    const input = { postId };

    await toast.promise(
      (async () => {
        const { data } = await deletePostMutation({
          variables: { input },
        });
        return data;
      })(),
      {
        loading: "Deleting...",
        success: () => "The post has been deleted.",
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An error occurred while deleting the post. Please try again."
          );
        },
      }
    );
  };

  return { handleDeletePost, isDeleting: loading, deleteError: error };
};

export {
  useCreatePost,
  useGetAllPosts,
  useGetOwnPosts,
  useGetPostsByAdmin,
  useDeletePostByAdmin,
};
