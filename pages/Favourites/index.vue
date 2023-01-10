<template>
  <div class="container favourites">
    <!-- you can use slots here -->
    <EmptyInfo
      v-if="!likedCards.length"
      title="Ваш список избранного пуст"
      text="Добавляйте понравившиеся товары в избранное, чтобы посмотреть или
    купить их позже"
      path="/"
      btn-text="Перейти на главную"
    />
    <div v-else class="cards-container">
      <Card
        v-for="likedCard in likedCards"
        :key="likedCard.id"
        :card="likedCard"
      />
    </div>
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
  padding-top: 10rem;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
