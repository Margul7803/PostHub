import { defineStore } from "pinia";
import { User } from "../models/userModel";

export const useUserStore = defineStore("user", {
    state: () => ({
        id: "" as string | undefined,
        username: "" as string | undefined,
        email: "" as string | undefined,
        avatar: "" as string | undefined,
        bio: "" as string | undefined,
        followersCount: 0 as number | undefined,
        followingCount: 0 as number | undefined,
        joinedAt: new Date() as Date | undefined,
        token: "" as string | undefined,
    }),
    actions: {
        setUser(user: User) {
            this.id = user._id;
            this.username = user.username;
            this.email = user.email;
            this.avatar = user.avatarUrl;
            this.bio = user.bio;
            this.followersCount = user.followersCount;
            this.followingCount = user.followingCount;
            this.joinedAt = user.joinedAt;
            this.token = user.token;
        },
        clearUser() {
            this.id = "";
            this.username = "";
            this.email = "";
            this.avatar = "";
            this.bio = "";
            this.followersCount = 0;
            this.followingCount = 0;
            this.joinedAt = undefined;
            this.token = "";
        },
        setToken(token: string) {
            this.token = token;
        },
    },
    getters: {
        getToken: (state) => () => {
            return state.token;
        },
        getUser: (state) => () => {
            return state;
        },
    },
});
