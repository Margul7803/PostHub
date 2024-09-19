import mongoose, { Schema, Document } from "mongoose";

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
}
export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    avatarUrl: string;
    bio?: string;
    followersCount: number;
    followingCount: number;
    joinedAt: Date;
    role: Role;
}

export const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        role: { type: Object.values(Role), default: Role.USER, required: true },
        password: { type: String, required: true },
        avatarUrl: { type: String, required: true },
        bio: { type: String },
        followersCount: { type: Number, default: 0 },
        followingCount: { type: Number, default: 0 },
        joinedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model<User & Document>("User", userSchema);

export default UserModel;
