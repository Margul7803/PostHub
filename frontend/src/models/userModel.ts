export interface User {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    avatarUrl?: string;
    bio?: string;
    followersCount?: number;
    followingCount?: number;
    joinedAt?: Date;
    token: string;
}
