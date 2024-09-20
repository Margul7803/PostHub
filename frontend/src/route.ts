import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ProfilePage from "./pages/Profile.vue";
import LoginPage from "./pages/Login.vue";
import RegisterPage from "./pages/Register.vue";
import { store } from "./store/store";

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home",
        meta: { requiresAuth: true, layout: "main" },
    },
    {
        path: "/profile",
        component: ProfilePage,
        name: "profile",
        meta: { requiresAuth: true, layout: "main" },
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login",
        meta: { layout: "auth" },
    },
    {
        path: "/register",
        component: RegisterPage,
        name: "register",
        meta: { layout: "auth" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.state.isAuthenticated) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
