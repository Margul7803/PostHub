import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/store";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./route";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
    },
    theme: {
        defaultTheme: "dark",
    },
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
