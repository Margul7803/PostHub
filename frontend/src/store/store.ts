import { createStore } from "vuex";
import { postModule } from "./postModule";
import { commentModule } from "./commentModule";
import { currUserModule } from "./userModule";

export const store = createStore({
    modules: {
        currUser: currUserModule,
        post: postModule,
        comment: commentModule,
    },
});
