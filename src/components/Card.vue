<script setup>
defineProps({
    game:Object,
});
</script>

<template>
  <div>
    <img
      src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
    />
    <h2>Заголовок</h2>
    <p>Просто собака</p>
    {{ game }}
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
}
h2 {
  color: black;
  font-size: 36px;
}
p {
  color: black;
  font-size: 36px;
}
</style>
