<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container">
    <HeroSection />
    <LargeCardDisplay
      v-for="cardInfo in largeCard"
      :key="cardInfo.id"
      :cardsInfo="cardInfo"
      :cardsWithSlider="true"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCard"
      :key="cardInfo.id"
      :cardsInfo="cardInfo"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  computed: {
    largeCard() {
      if (this.$store.state.photolamp.length === 0) return
      return this.$store.getters.getAllStateInOneArr
    },
    smallCard() {
      return this.$store.getters.getSmallCards
    },
  },

  async mounted() {
    await this.$store.dispatch('getDataByReferenceFromDb', 'albums')
    await this.$store.dispatch('getDataByReferenceFromDb', 'portrets')
    await this.$store.dispatch('getDataByReferenceFromDb', 'notebooks')
    await this.$store.dispatch('getDataByReferenceFromDb', 'photolamp')
  },
}
</script>

<style scoped>
</style>
