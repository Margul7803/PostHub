import { Store } from "vuex";
import { Profile } from "../src/models/profileModel";

declare module "@vue/runtime-core" {
    interface State {
        profile: Profile;
    }

    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
