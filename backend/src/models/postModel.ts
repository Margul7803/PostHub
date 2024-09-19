import mongoose, { Schema, Document } from "mongoose";
import { User } from "./userModel";
import { commentSchema } from "./commentModel";

interface Post {
    _id: string;
    author: User;
    description: string;
    imageUrl?: string;
    createdAt: Date;
    likesCount: number;
    comments: Comment[];
    tags?: string[];
}

const postSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        description: { type: String, required: true },
        imageUrl: { type: String },
        createdAt: { type: Date, default: Date.now },
        likesCount: { type: Number, default: 0 },
        comments: [commentSchema],
        tags: [{ type: String }],
    },
    {
        timestamps: true,
    }
);

const PostModel = mongoose.model<Post & Document>("Post", postSchema);

export default PostModel;
