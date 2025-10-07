import type { Like, Tag, User } from ".";


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