import { User } from "./userModel";

export interface Comment {
    _id: string;
    postId: string;
    author: User;
    content: string;
    createdAt: Date;
}
