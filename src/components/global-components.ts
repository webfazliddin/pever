import type { App } from "vue";

// UI components
import AppHeader from "@/components/Layout/AppHeader.vue";
import  AppFooter from "@/components/Layout/AppFooter.vue";

export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here

    app.component("AppHeader", AppHeader);
    app.component("AppFooter", AppFooter);
  },
};
