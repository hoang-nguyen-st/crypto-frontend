import type { Post } from ".";

export interface Tag {
  id: string;
  name: string;
  posts?: Post[];
  createdAt: string;
  updatedAt: string;
}
