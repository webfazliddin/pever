// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: () => import("@/pages/HomePage.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "",
          component: () => import("@/pages/Auth/LoginPage.vue"),
        },
      ],
    },
  ],
});

export default router;
