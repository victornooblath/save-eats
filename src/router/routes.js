const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", name: "home", component: () => import("pages/Index.vue") },
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
