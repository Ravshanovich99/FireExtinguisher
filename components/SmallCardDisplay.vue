<template>
  <div class="container">
    <h1 class="header">
      {{ cardsInfo.title }}
    </h1>
    <div class="card-container">
      <SmallCard
        v-for="cardsImage in cardsInfo.cards"
        :id="cardsImage.id"
        :key="cardsImage.id"
        :image="cardsImage.image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardsInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  padding: 2rem 0;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>