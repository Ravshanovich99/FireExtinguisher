<template>
  <div class="container">
    <div v-show="productIdPage" class="skeletons-container">
      <div class="skeletons-left">
        <b-card class="skeleton">
          <b-skeleton-img class="skeleton-img" no-aspect></b-skeleton-img>
        </b-card>
        <b-card class="skeleton">
          <b-skeleton-img class="skeleton-img" no-aspect></b-skeleton-img>
        </b-card>
      </div>
      <div class="skeletons-right">
        <b-card class="skeleton">
          <div>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </div>
          <b-skeleton type="button" class="skeleton-btn"></b-skeleton>
        </b-card>
      </div>
    </div>
    <div v-show="card" class="card-skeleton">
      <b-card class="skeleton">
        <b-skeleton-img class="skeleton-img" no-aspect></b-skeleton-img>
      </b-card>
    </div>
  </div>
</template>

<script>
import './Skeleton.scss'
export default {
  props: {
    productIdPage: {
      type: Boolean,
    },
    card: {
      type: Boolean,
    },
  },
}
</script>
