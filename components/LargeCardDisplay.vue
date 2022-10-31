<template>
  <div class="container">
    <h4 class="header">{{ cardsInfo.title }}</h4>
    <p class="snippet">{{ cardsInfo.snippet }}</p>
    <div class="cards-container">
      <LargeCard
        v-for="cardInfo in cardsInfo.cards"
        :key="cardInfo.id"
        :title="cardInfo.title"
        :snippet="cardInfo.snippet"
        :image="cardInfo.image"
        :id="cardInfo.id"
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
  margin-top: 2rem;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
}
.snippet {
  color: grey;
  margin-bottom: 1.5rem;
}
.cards-container {
  display: flex;
  justify-content: space-between;
}
</style>