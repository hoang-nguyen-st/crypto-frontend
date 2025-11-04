import type { Like, Post } from ".";

export interface User {
  id: string;
  avatar?: string | null;
  name: string;
  email: string;
  bio?: string | null;
  password?: string | null;
  posts?: Post[];
  comments?: Comment[];
  likes?: Like[];
  createdAt: string;
  updatedAt: string;
}

export interface GetUserByPost {
  id: string;
  name: string;
  avatar?: string;
  email: string;
}

export interface GetAllUsersResponse {
  users: GetUserByPost[];
}
