export const postModule = {
    state: () => ({
        posts: [], // Liste des posts
    }),
    mutations: {
        SET_POSTS(state: { posts: any }, posts: any) {
            state.posts = posts;
        },
        ADD_POST(state: { posts: any[] }, post: any) {
            state.posts.push(post);
        },
    },
    actions: {
        fetchPosts({ commit }: { commit: Function }) {
            // Action pour récupérer les posts (par exemple depuis une API)
            const dummyPosts = [
                {
                    id: 1,
                    title: "Premier Post",
                    content: "Ceci est le contenu du premier post",
                },
                {
                    id: 2,
                    title: "Deuxième Post",
                    content: "Ceci est le contenu du deuxième post",
                },
            ];
            commit("SET_POSTS", dummyPosts);
        },
        createPost({ commit }: { commit: Function }, post: any) {
            // Action pour créer un nouveau post
            commit("ADD_POST", post);
        },
    },
    getters: {
        getAllPosts: (state: { posts: any }) => state.posts,
        getPostById: (state: { posts: any[] }) => (id: any) =>
            state.posts.find((post) => post.id === id),
    },
};
