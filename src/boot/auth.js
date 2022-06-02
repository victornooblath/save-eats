// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default ({ router }) => {
  const isAuth = false;

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
      if (isAuth) {
        next();
        return;
      }
      next({ name: "login" });
    } else {
      if(isAuth) {
        next(false)
        return;
      }
      next();
    }
  });
};
