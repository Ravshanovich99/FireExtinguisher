<template>
  <NuxtLink
    :to="{
      path: `/products/${id}`,
      query: { search: stateName },
    }"
    class="small-card-container"
  >
    <img :src="image" alt="image" class="image" />
  </NuxtLink>
</template>

<script>
import './SmallCard.scss'
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    stateName: {
      type: String,
      required: true,
    },
  },
}
</script>
