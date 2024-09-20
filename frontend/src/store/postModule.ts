import { defineStore } from "pinia";
import { Post } from "../models/postModel";

export const usePostStore = defineStore("post", {
    state: () => ({
        posts: [] as Post[],
    }),
    actions: {
        setPosts(posts: Post[]) {
            this.posts = posts;
        },
        addPost(post: Post) {
            this.posts.push(post);
        },
        deletePost(postId: string) {
            this.posts = this.posts.filter((post) => post._id !== postId);
        },
        updatePost(updatedPost: Post) {
            const index = this.posts.findIndex(
                (post) => post._id === updatedPost._id
            );
            if (index !== -1) {
                this.posts[index] = updatedPost;
            }
        },
    },
    getters: {
        getPostById: (state) => (id: string) => {
            return state.posts.find((post) => post._id === id);
        },
        getPosts: (state) => {
            return state.posts;
        },
    },
});
