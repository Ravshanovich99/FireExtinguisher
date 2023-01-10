<template>
  <div>
    <div v-show="$route.params.id === review.cardId" class="review-card">
      <div class="image-container">
        <img :src="review.userPhoto" alt="image" />
      </div>
      <div class="text-container">
        <h6>{{ review.userName }}</h6>
        <b-form-rating
          id="rating-inline"
          no-border
          inline
          readonly
          :value="review.rate"
        ></b-form-rating>
        <p>
          {{ review.review }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.review-card {
  margin: 1.5rem 0;
  display: flex;
}
.text-container {
  margin-left: 2rem;
}
img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
}
p {
  color: grey;
  margin: 0;
}
h6 {
  font-size: 1.15rem;
  font-weight: 400;
}
#rating-inline {
  padding: 0;
}
</style>