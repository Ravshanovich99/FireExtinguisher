<template>
  <div>
    <h3>Customer Reviews</h3>
    <div v-if="reviewers">
      <ReviewCard
        v-for="reviewer in reviewers.results"
        :key="reviewer.login.uuid"
        :review="reviewer"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewers: null,
      id: null,
    }
  },

  async fetch() {
    const response = await fetch('https://randomuser.me/api/?results=5')
    this.reviewers = await response.json()
  },
}
</script>

<style>
</style>