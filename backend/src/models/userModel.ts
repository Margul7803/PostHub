import mongoose, { Schema, Document } from "mongoose";

export interface User {
    _id: string;
    username: string;
    avatarUrl: string;
    bio?: string;
    followersCount: number;
    followingCount: number;
    joinedAt: Date;
}

export const userSchema = new Schema(
    {
        username: { type: String, required: true },
        avatarUrl: { type: String, required: true },
        bio: { type: String },
        followersCount: { type: Number, required: true },
        followingCount: { type: Number, required: true },
        joinedAt: { type: Date, required: true },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model<User & Document>("User", userSchema);

export default UserModel;
