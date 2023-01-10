<template>
  <div class="container cart">
    <EmptyInfo
      v-if="!cardsInCart.length"
      title="В корзине пока ничего нет"
      text="Добавляйте первый"
      path="/products"
      btn-text="Перейти к покупкам"
    />
    <div v-else class="cards-container">
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
  padding-top: 10rem;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
