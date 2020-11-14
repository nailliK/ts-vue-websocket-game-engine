import "./registerServiceWorker";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {createApp} from "vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
