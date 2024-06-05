import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/repodisplay/:name",
      name: "RepoDisplayView",
      component: () => import("../views/RepoDisplayView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "Notfound",
      component: () => import("../views/ErrorPage404view.vue"),
    },
  ],
});

export default router;
