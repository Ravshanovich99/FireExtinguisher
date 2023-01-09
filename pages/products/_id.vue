<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div v-if="product" class="container py-2">
    <div class="hero container">
      <div class="media-container">
        <hooper class="image-carousel">
          <slide v-for="image in product.images" :key="image" class="slide">
            <img :src="image" alt="image" />
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
        <div v-show="product.video" class="video-container">
          <video
            controls
            type="iframe"
            aspect="16by9"
            allowfullscreen
            :src="product.video"
          ></video>
        </div>
      </div>
      <div class="info-box">
        <div class="product-info">
          <h1 class="title">{{ product.title }}</h1>
          <p class="snippet">{{ product.description }}</p>
          <div v-if="product.stateName !== 'glasses'" class="product-prices">
            <b-form-radio
              v-for="price of product.prices"
              :key="price.price"
              v-model="selectedSize"
              :value="`${price.width} x ${price.height}`"
              class="price-radio"
              ><div class="price-radio__info">
                {{ price.width }} x {{ price.height }}
                <span class="price">{{ price.price }} сум</span>
              </div></b-form-radio
            >
          </div>
          <div v-else>{{ product.prices }} cум</div>
        </div>
        <OrderModal
          :orderingProduct="product"
          :selectedSize="selectedSize"
          @showSizeToast="showSizeToast"
          @showOrderedToast="showOrderedToast"
        />
      </div>
      <Toast
        :toastId="'product-size-toast'"
        :text="'Сначала выберите размер'"
      />
      <Toast
        :toastId="'ordered-toast'"
        :text="'Ваш заказ принято! \n Мы свяжемся с вами очень скоро'"
      />
    </div>
    <div class="description-container">
      <p>
        {{ product.description }}
      </p>
    </div>
    <ReviewsSection :productName="product.title" />
    <div class="rate-container">
      <div v-show="rateForm" class="rate active">
        <RateForm v-show="$store.state.user" />
      </div>
    </div>
  </div>
  <LoaderSkeleton v-else :productIdPage="true" />
</template>

<script>
import './productId.scss'
import 'hooper/dist/hooper.css'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
export default {
  components: { Hooper, Slide, HooperPagination },
  data() {
    return {
      selectedSize: '',
      rateForm: true,
      product: null,
    }
  },
  async mounted() {
    const stateName = this.$route.query.search
    const cardId = this.$route.params.id
    this.product = await this.$store.getters.getCardById(cardId)
    if (!this.product) {
      this.product = await this.$store.dispatch('getExactCardFromDb', {
        stateName,
        cardId,
      })
      // console.log('product is reloaded', this.product)
    }
  },

  methods: {
    showSizeToast() {
      this.$bvToast.show('product-size-toast')
    },
    showOrderedToast() {
      this.$bvToast.show('ordered-toast')
    },
  },
}
</script>