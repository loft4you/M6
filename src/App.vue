<script setup>
import { RouterLink, RouterView } from 'vue-router'
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

</style>
