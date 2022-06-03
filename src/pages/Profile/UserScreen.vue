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
export default {
  data() {
    return {};
  },
  methods: {
    async logOut() {
      try {
        await signOut(this.$auth);
        this.$q.localStorage.set("userId", false);
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
