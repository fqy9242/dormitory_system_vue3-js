import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    // {
    //   path: "/:catchAll(.*)",
    //   name: "404",
    //   component: () => import("@/views/404.vue"),
    // },
    {
      path: "/login",
      name: "登录",
      component: () => import("@/views/login/index.vue"),
    },
  ],
});

export default router;
