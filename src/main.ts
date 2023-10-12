import { createApp } from "vue";
import globalComponents from "@/components/global-components";
import "@/assets/scss/global.scss";

import App from "./App.vue";
import router from "./router";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App);

// app.use(ElementPlus);
app.use(globalComponents);
app.use(router);

app.mount("#app");
