<template>
  <div
    :class="
      $store.state.darkMode
        ? 'card card-yellow-shadow'
        : 'card card-black-shadow'
    "
  >
    <div class="img-card">
      <img :src="card.images[0]" alt="Sample 1" />
    </div>
    <div class="icons">
      <div class="like-btn">
        <b-icon
          class="b-icon"
          :icon="!!!showLikedCards(card.id) ? 'suit-heart' : 'suit-heart-fill'"
          @click="likeCard(card.id)"
        ></b-icon>
      </div>
      <div class="play-btn">
        <NuxtLink
          :to="{
            path: `/products/${card.id}`,
            query: { search: card.stateName },
          }"
        >
          <b-icon class="b-icon" icon="caret-right"></b-icon>
        </NuxtLink>
      </div>
    </div>
    <div class="card-info">
      <div class="card-text">
        <h3 class="title">{{ card.title }}</h3>
        <p class="snippet">{{ card.description }}</p>
      </div>
      <ButtonsButton
        :icon="'cart3'"
        :text="!!showCardsInCart(card.id) ? 'Добавлено' : 'Добавить в корзину'"
        @click="addCardToCart(card.id)"
      />
    </div>
  </div>
</template>

<script>
import './Card.scss'
export default {
  props: {
    card: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    if (localStorage.likedItems) {
      this.$store.commit('initializeLikedCards')
    }
    if (localStorage.cart) {
      this.$store.commit('initializeCart')
    }
  },

  methods: {
    showLikedCards(id) {
      return this.$store.getters.isCardLiked(id)
    },
    likeCard(id) {
      this.$store.dispatch('likedCardsHandler', id)
    },

    showCardsInCart(id) {
      return this.$store.getters.isCardInCart(id)
    },
    addCardToCart(id) {
      this.$store.dispatch('cardsInCartHandler', id)
    },
  },
}
</script>
