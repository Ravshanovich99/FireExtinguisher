<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container">
    <h2 class="header">
      {{ cardsInfo.title }}
    </h2>
    <div class="card-container">
      <SmallCard
        v-for="card in cardsInfo.cards"
        :id="card.id"
        :key="card.id + generateUid()"
        :image="card.images[0]"
        :stateName="card.stateName"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    cardsInfo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    generateUid() {
      return uuidv4()
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
}
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>