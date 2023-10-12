// Layout components
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
import Login from "@/components/Login/LoginPage.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // Layout components
    AppHeader: typeof AppHeader;
    AppFooter: typeof AppFooter;
    Login: typeof Login;
  }
}
