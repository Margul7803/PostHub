export const currUserModule = {
    state: () => ({
        user: null,
    }),
    mutations: {
        SET_USER(state: { user: any }, user: any) {
            state.user = user;
        },
        LOGOUT_USER(state: { user: null }) {
            state.user = null;
        },
    },
    actions: {
        login({ commit }: any, user: any) {
            commit("SET_USER", user);
        },
        logout({ commit }: { commit: Function }) {
            commit("LOGOUT_USER");
        },
    },
    getters: {
        isAuthenticated: (state: { user: any }) => !!state.user,
        getUser: (state: { user: any }) => state.user,
    },
};
