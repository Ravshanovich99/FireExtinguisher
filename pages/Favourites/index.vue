<template>
  <div class="container favourites cards-container">
    <Card
      v-for="likedCard in likedCards"
      :key="likedCard.id"
      :card="likedCard"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Избранное',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Подарки на любой вкус',
        },
      ],
    }
  },
  computed: {
    likedCards() {
      return this.$store.getters.getLikedCards
    },
  },
}
</script>

<style scoped>
.favourites {
  padding-top: 7rem;
}
</style>
