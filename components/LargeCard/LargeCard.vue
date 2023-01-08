<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <hooper
      v-if="cardsWithSlider"
      :settings="hooperSettings"
      class="cards-slider-container"
    >
      <slide v-for="card of cards" :key="card.id">
        <Card :card="card" />
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

    <!------- Cards without Slider --------->

    <div v-else class="cards-container">
      <Card v-for="card of cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import 'hooper/dist/hooper.css'
import './LargeCard.scss'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
export default {
  components: { Hooper, Slide, HooperPagination },
  props: {
    cards: {
      type: Object,
      required: true,
    },
    cardsWithSlider: {
      type: Boolean,
    },
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        breakpoints: {
          2400: {
            itemsToShow: 6,
          },
          1800: {
            itemsToShow: 5,
          },
          1500: {
            itemsToShow: 4,
          },
          768: {
            itemsToShow: 3,
          },
          566: {
            itemsToShow: 2,
          },
          320: {
            itemsToShow: 1,
          },
        },
      },
    }
  },
}
</script>