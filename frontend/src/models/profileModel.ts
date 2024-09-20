export interface Profile {
    _id: string;
    username: string;
    email: string;
    password: string;
    avatarUrl: string;
    bio: string;
    followersCount: number;
    followingCount: number;
    joinedAt: Date;
}
