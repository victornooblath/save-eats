const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("pages/Home/Home.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () => import("pages/SearchPage.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/Profile/UserScreen.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("pages/Notification/NotificationScreen.vue"),
      },
      {
        path: "post",
        name: "postScreen",
        component: () => import("pages/PostScreen.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("pages/Auth/Auth.vue"),
    redirect: { name: "login" },
    children: [
      {
        path: "login",
        component: () => import("pages/Auth/Login.vue"),
        meta: { requiresAuth: false },
        name: "login",
      },
      {
        path: "register",
        component: () => import("pages/Auth/Register.vue"),
        meta: { requiresAuth: false },
        name: "register",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
