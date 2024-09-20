export const commentModule = {
    state: () => ({
        comments: [], // Liste des commentaires
    }),
    mutations: {
        SET_COMMENTS(state: { comments: any }, comments: any) {
            state.comments = comments;
        },
        ADD_COMMENT(state: { comments: any[] }, comment: any) {
            state.comments.push(comment);
        },
    },
    actions: {
        fetchComments({ commit }: { commit: Function }) {
            // Action pour récupérer les commentaires
            const dummyComments = [
                { id: 1, postId: 1, content: "Premier commentaire" },
                { id: 2, postId: 1, content: "Deuxième commentaire" },
            ];
            commit("SET_COMMENTS", dummyComments);
        },
        createComment({ commit }: any, comment: any) {
            // Action pour ajouter un nouveau commentaire
            commit("ADD_COMMENT", comment);
        },
    },
    getters: {
        getCommentsByPostId: (state: { comments: any[] }) => (postId: any) =>
            state.comments.filter((comment) => comment.postId === postId),
    },
};
