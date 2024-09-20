import { defineStore } from "pinia";
import { Profile } from "../models/profileModel";

export const useProfileStore = defineStore("profile", {
    state: () => ({
        id: "",
        username: "",
        email: "",
        avatar: "",
        bio: "" as string | undefined,
        followersCount: 0,
        followingCount: 0,
        joinedAt: new Date(),
    }),
    actions: {
        setProfile(profile: Profile) {
            this.id = profile._id;
            this.username = profile.username;
            this.email = profile.email;
            this.avatar = profile.avatarUrl;
            this.bio = profile.bio;
            this.followersCount = profile.followersCount;
            this.followingCount = profile.followingCount;
            this.joinedAt = profile.joinedAt;
        },
        clearProfile() {
            this.id = "";
            this.username = "";
            this.email = "";
            this.avatar = "";
            this.bio = "";
            this.followersCount = 0;
            this.followingCount = 0;
            this.joinedAt = new Date();
        },
    },
    getters: {},
});
