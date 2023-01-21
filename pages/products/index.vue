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
      :key="cardInfo.urlsId"
      :cardsInfo="cardInfo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Продукты',
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
    getStates() {
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

<style scoped></style>
