<template>
  <div class="container reviews">
    <section>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8 text-center">
          <h3 class="mb-4">Отзывы наших клиентов</h3>
          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
            Мы очень ради что вам нравится
          </p>
        </div>
      </div>

      <div
        v-for="reviewer in reviews"
        :key="reviewer.id"
        class="row text-center"
      >
        <div class="col-md-4 mb-5 mb-md-0 review-card">
          <div class="d-flex justify-content-center mb-4">
            <img
              :src="reviewer.userPhoto"
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">{{ reviewer.userName }}</h5>
          <p class="px-xl-3">{{ reviewer.review }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import './Reviews.scss'
export default {
  data() {
    return {
      title: 'Отзывы',
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
    reviews() {
      return this.$store.getters.getCustomerReviews
    },
  },
  async mounted() {
    await this.$store.dispatch('getCustomerReviewsFromDb')
  },
}
</script>
