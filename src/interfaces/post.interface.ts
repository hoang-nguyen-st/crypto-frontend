import type { GetUserByPost, Like, Tag, User } from ".";

export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  thumbnail?: string | null;
  published: boolean;
  userId: string;
  user?: User;
  comments?: Comment[];
  tags?: Tag[];
  likes?: Like[];
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostDto {
  content: string;
  thumbnail?: File | null;
}

export interface GetPostsDto {
  id: string;
  thumbnail?: string;
  content: string;
  createdAt: string;
  updataedAt: string;
  user: GetUserByPost;
}

export interface GetPostsResponse {
  posts: GetPostsDto[];
}

export interface GetOwnPostsResponse {
  getPostBelongToUser: GetPostsDto[];
}

export interface GetPostsByAdminResponse {
  getPostBelongToUserByAdmin: GetPostsDto[];
}
