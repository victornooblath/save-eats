<template>
  <div>
    <q-layout>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
    <q-dialog
      v-model="dialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <PostScreen></PostScreen>
    </q-dialog>

    <div class="footer">
      <q-tabs
        v-model="tab"
        no-caps
        class="bg-deep-orange text-white shadow-2"
        align="justify"
      >
        <q-route-tab icon="home" to="/home" exact />
        <q-route-tab icon="search" to="/search" />
        <q-btn
          push
          class="q-p-xs"
          fab
          icon="add"
          color="white"
          text-color="orange"
          @click="dialog = true"
        />
        <q-route-tab icon="notifications" to="/notifications" />
        <q-route-tab icon="account_circle" to="/profile" />
      </q-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { collection, query, where, getDocs } from "firebase/firestore";
import PostScreen from "../pages/PostScreen.vue";
export default {
  data() {
    return {
      tab: "home",
      dialog: false,
    };
  },
  watch: {
    userId() {
      this.getUser();
    },
  },
  async mounted() {
    console.log("mounted");
    this.getUser();
  },
  components: {
    PostScreen,
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.id,
      userEmail: (state) => state.user.email,
    }),
  },
  methods: {
    ...mapMutations({
      setUser: "user/setUser",
    }),
    async getUser() {
      console.log(this.userId);

      const q = query(
        collection(this.$db, "users"),
        where("id", "==", this.userId)
      );
      const querySnapshot = await getDocs(q);
      const user = { email: null, uid: null };
      querySnapshot.forEach((doc) => {
        user.email = doc.data().email;
        user.uid = doc.data().id;
      });
      console.log(user);
      this.setUser(user);
    },
  },
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
