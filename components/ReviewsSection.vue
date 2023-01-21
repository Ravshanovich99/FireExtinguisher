<template>
  <div>
    <h4>Отзывы {{ productName }}</h4>
    <div>
      <ReviewCard
        v-for="reviewer in reviews"
        :key="reviewer.id"
        :review="reviewer"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productName: {
      type: String,
      default: '',
    },
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

<style>
</style>