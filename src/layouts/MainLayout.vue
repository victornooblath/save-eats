<template>
  <div>
    <q-layout>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>

    <div class="footer">
      <q-tabs
        v-model="tab"
        no-caps
        class="bg-orange text-white shadow-2"
        align="justify"
      >
        <q-route-tab icon="home" to="/home" exact />
        <q-route-tab icon="search" to="/search" />
        <q-route-tab icon="notifications" to="/notifications" />
        <q-route-tab icon="account_circle" to="/profile"/>
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "home",
    };
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
