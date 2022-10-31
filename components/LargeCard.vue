<template>
  <NuxtLink :to="`products/${id}`" class="card">
    <img :src="require(`@/assets/images/${image}`)" alt="image" class="image" />
    <h3 class="header">{{ title }}</h3>
    <p class="snippet">{{ snippet }}</p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
</style>