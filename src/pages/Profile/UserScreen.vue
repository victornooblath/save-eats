<template>
  <q-layout>
    <q-page-container>
      <h3>USER SCREEN</h3>
      <q-btn
        color="red"
        icon-right="logout"
        label="Log Out"
        @click="logOut()"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { signOut } from "firebase/auth";
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      resetStateUser: "user/resetStateUser",
    }),
    async logOut() {
      try {
        await signOut(this.$auth);
        this.$q.localStorage.set("userId", null);
        this.resetStateUser();
        console.log("Deslogado");
        this.$router.push({ name: "login" });
      } catch (err) {
        console.error(err);
        this.$q.notify({
          color: "negative",
          message: `ERROR!: ${err.code}`,
          icon: "warning",
          position: "top",
        });
      }
    },
  },
};
</script>
<style></style>
