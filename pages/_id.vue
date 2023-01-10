<template>
  <div class="container">
    <LargeCardDisplay :cards-info="exactState" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exactState: this.$store.getters.getStateByName(this.$route.params.id),
    }
  },
  async mounted() {
    if (this.exactState.length === 0) {
      this.exactState = await this.$store.dispatch(
        'getStateByNameFromDb',
        this.$route.params.id
      )
    }
  },
}
</script>

<style scoped>
.container {
  padding-top: 4rem;
}
</style>
