// import something here
import { LocalStorage } from "quasar";
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const localStorageUserId = LocalStorage.getItem("userId");
    const isAuth = !!store.state.user.id || !!localStorageUserId;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (!!localStorageUserId) store.state.user.id = localStorageUserId;
    // console.log(isAuth);
    // console.log(store.state);
    if (requiresAuth) {
      if (isAuth) {
        next();
        return;
      }
      next({ name: "login" });
    } else {
      if (isAuth) {
        next({ name: "home" });
        return;
      }
      next();
    }
  });
};
