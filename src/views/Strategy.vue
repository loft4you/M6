<script setup>
import Card from "../components/Card.vue";
import { GamesCategory } from "../api.js";
import { onBeforeMount, ref } from "vue";

let games = ref([]);
onBeforeMount(async () => {
  games.value = await GamesCategory("strategy");
});
</script>
<template>
  <section>
    <h1>Strategy</h1>
    <div class="block">
      <Card v-for="(item, index) in games" :key="index" :game="item" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
  color: white;
}
.block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  margin: 0 50px;
}
</style>