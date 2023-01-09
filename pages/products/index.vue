<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container py-5">
    <LargeCardDisplay
      v-for="cardInfo in getStates"
      :key="cardInfo.id"
      :cardsInfo="cardInfo"
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
  data() {
    return {
      smallCardInfo: {
        id: 1,
        title: 'Лучшие',
        cards: [],
      },
    }
  },

  computed: {
    getStates() {
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