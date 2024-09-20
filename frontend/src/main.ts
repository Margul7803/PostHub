import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

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

const pinia = createPinia();

createApp(App).use(pinia).use(vuetify).use(router).mount("#app");
