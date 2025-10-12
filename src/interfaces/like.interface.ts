import type { Post, User } from ".";

export interface Like {
  id: string;
  userId: string;
  user?: User;
  postId: string;
  post?: Post;
  createdAt: string;
  updatedAt: string;
}
