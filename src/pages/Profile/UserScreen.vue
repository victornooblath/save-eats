<template>
  <q-page-container>
    <q-page class="q-pa-md">
      <q-header reveal elevated class="bg-deep-orange text-white">
        <q-toolbar >
          <q-btn dense push flat round icon="menu" @click="right = !right" />
        </q-toolbar>
      </q-header>
      <q-drawer v-model="right" side="right" behavior="mobile" bordered>
        <q-btn
          color="red"
          icon-right="logout"
          label="Log Out"
          @click="logOut()"
        />
      </q-drawer>
      <q-card
        flat
        style="
          background-color: lightgrey;
          width: 100%;
          height: 100%;
          margin: 0;
        "
      >
      <div class="row q-pa-md">
        <div class="col-4">
          <q-avatar
            size="100px"
            font-size="52px"
            color="teal"
            text-color="white"
            icon="person"
          />
        </div>
        <div class="col " >
          <div class="" style="margin-top:50px">{username}</div>
          <div class="">4.5<q-btn flat round color="yellow" icon="star" /></div>
        </div>
      </div>
      </q-card>
        <p>oi</p>
    </q-page>
  </q-page-container>
</template>

<script>
import { signOut } from "firebase/auth";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      right: false,
    };
  },
  methods: {
    ...mapMutations({
      resetStateUser: "user/resetStateUser",
    }),
    async logOut() {
      try {
        await signOut(this.$auth);
        this.$q.localStorage.set("userId", false);
        this.resetStateUser();
        console.log("Deslogado");
        this.$router.push({ name: "login" });
        this.$q.notify({
          color: "success",
          message: `Até a próxima!`,
          icon: "waving_hand",
          position: "top",
        });
      } catch (err) {
        console.error(err);
        this.$q.notify({
          color: "secondary",
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
