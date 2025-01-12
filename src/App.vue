<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
// import Main from "./components/Main.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
  </main>
</template>

<style scoped>
main {
  background: #272b30;
  min-height: 100vh;
}
</style>
