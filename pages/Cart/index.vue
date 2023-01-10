<template>
  <div class="container cart cards-container">
    <Card
      v-for="cardInCart in cardsInCart"
      :key="cardInCart.id"
      :card="cardInCart"
    />
    <!-- <ButtonsButton
      :width="'70%'"
      v-if="cardsInCart.length > 0"
      :text="'Заказать все'"
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Корзина',
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
    cardsInCart() {
      return this.$store.getters.getCardsInCart
    },
  },
}
</script>

<style scoped lang="scss">
.cart {
  padding: 7rem 0;
}
</style>
