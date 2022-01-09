import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BoxLink from "./components/ui/BoxLink.vue";
const app = createApp(App);
app.component("base-card", BaseCard);
app.component("box-link", BoxLink);

app.mount("#app");
