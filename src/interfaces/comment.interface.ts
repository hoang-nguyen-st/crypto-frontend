import type { Post, User } from ".";

export interface Comment {
  id: string;
  content: string;
  postId: string;
  post?: Post;
  userId: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
}
