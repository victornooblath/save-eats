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
import PostScreen from "../pages/PostScreen.vue";
export default {
  data() {
    return {
      tab: "home",
      dialog: false,
    };
  },
  components: {
    PostScreen,
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
