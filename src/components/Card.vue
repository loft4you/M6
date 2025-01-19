<script setup>
defineProps({
    game:Object,
});
</script>

<template>
  <div>
    <img :src="game.thumbnail"
    />
    <h2>{{ game.title }}</h2>
    <p>{{ game.short_description }}</p>
    <h3>Платформа: {{ game.platform }}</h3>
    <h3>Релиз: {{ game.release_date }}</h3>

    <a target= "_blank" :href="game.freetogame_profile_url">Ссылка</a>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
  color: #aaa;
  transition: all 0.5s;
  text-align: center;
  display: flex !important;
  flex-direction: column;
}
img {
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-bottom: 10px;
}
h2 {
  color: black;
  font-size: 36px;
  margin-bottom: 10px;
}
p {
  color: black;
  font-size: 24px;
  margin-bottom: 5px;
}
a {
  color:black;
  font-size: 40px;
  background: red;
  margin-top: auto;
  border-radius:12px;
}
</style>
