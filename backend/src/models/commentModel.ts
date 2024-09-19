import mongoose, { Schema, Document } from "mongoose";
import { User, userSchema } from "./userModel";

export interface Comment {
    _id: string;
    postId: string;
    author: User;
    content: string;
    createdAt: Date;
}

export const commentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});

const CommentModel = mongoose.model<Comment & Document>(
    "Comment",
    commentSchema
);

export default CommentModel;
