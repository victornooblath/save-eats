<template>
  <q-layout>
    <q-page-container>
      <transition enter-active-class="animated flipInY slower">
        <router-view></router-view>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
