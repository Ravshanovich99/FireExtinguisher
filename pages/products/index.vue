<template>
  <div class="container py-5">
    <LargeCardDisplay
      v-for="cardInfo in getStates"
      :key="cardInfo.id"
      :cardsInfo="cardInfo"
    />

    <SmallCardDisplay
      v-for="cardInfo in smallCard"
      :key="cardInfo.urlsId"
      :cardsInfo="cardInfo"
    />
  </div>
</template>

<script>
export default {
  computed: {
    getStates() {
      if (this.$store.state.glasses.length === 0) return
      return this.$store.getters.getAllStateInOneArr
    },
    smallCard() {
      return this.$store.getters.getSmallCards
    },
  },

  async mounted() {
    await this.$store.dispatch('getDataByReferenceFromDb', 'albums')
    await this.$store.dispatch('getDataByReferenceFromDb', 'portrets')
    await this.$store.dispatch('getDataByReferenceFromDb', 'glasses')
  },
}
</script>

<style scoped>
</style>