<template>
  <div>
    <div v-if="myRentals[0]" class="container">
      <MyItem v-for="rental in myRentals" :key="rental.id" :item="rental" />
    </div>
    <div v-else class="container">
      <h2 @click="log">No orders yet</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['myRentals']),
  },
  methods: {
    log() {
      console.log(this.myRentals)
    },
  },
}
</script> 

<style scoped>
.container {
  min-height: 100vh;
  padding: 5rem 0;
}
</style>