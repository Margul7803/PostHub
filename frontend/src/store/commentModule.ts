// stores/comment.js
import { defineStore } from "pinia";
import { Comment } from "../models/commentModel";

export const useCommentStore = defineStore("comment", {
    state: () => ({
        comments: [] as Comment[],
    }),
    actions: {
        addComment(comment: Comment) {
            this.comments.push(comment);
        },
        deleteComment(commentId: string) {
            this.comments = this.comments.filter(
                (comment) => comment._id !== commentId
            );
        },
        updateComment(updatedComment: Comment) {
            const index = this.comments.findIndex(
                (comment) => comment._id === updatedComment._id
            );
            if (index !== -1) {
                this.comments[index] = updatedComment;
            }
        },
    },
    getters: {
        getCommentsByPostId: (state) => (postId: string) => {
            return state.comments.filter(
                (comment) => comment.postId === postId
            );
        },
    },
});
