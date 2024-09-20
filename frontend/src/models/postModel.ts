import { User } from "./userModel";

export interface Post {
    _id: string;
    author: User;
    description: string;
    imageUrl?: string;
    createdAt: Date;
    likesCount: number;
    comments: Comment[];
    tags?: string[];
}
