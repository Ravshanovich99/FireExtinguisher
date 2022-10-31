<template>
  <div class="container">
    <HeroSection />
    <LargeCardDisplay
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsInfo="cardInfo"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCardInfo"
      :key="cardInfo.id"
      :cardsInfo="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
export default {
  name: 'IndexPage',
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    }
  },
}
</script>

<style scoped>
</style>
