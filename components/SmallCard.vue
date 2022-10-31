<template>
  <NuxtLink :to="`products/${id}`" class="card-container">
    <img :src="require(`@/assets/images/${image}`)" alt="image" class="image" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
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
.card-container {
  width: 24%;
  height: 12.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.image {
  width: 100%;
  height: 100%;
}
</style>