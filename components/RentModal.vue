<template>
  <div>
    <b-button id="show-btn" @click="showModal">Rent</b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="calendar-container">
        <div class="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            necessitatibus nesciunt, obcaecati repudiandae ratione beatae, et,
            enim nostrum ducimus ex tempore cumque itaque temporibus sapiente
            veritatis esse reprehenderit fuga. Error.
          </p>
        </div>
        <vc-date-picker color="red" is-dark is-range :value="null" />
      </div>
      <b-button
        id="show-btn"
        variant="outline-danger"
        @click="
          () => {
            pushProductToRentals($route.params.id)
            hideModal()
            makeToast('success')
          }
        "
        >Order</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },

    hideModal() {
      this.$refs['my-modal'].hide()
    },

    ...mapMutations(['pushProductToRentals']),

    makeToast(variant = null) {
      this.$bvToast.toast('Product sent succesfully sent to your Rentals', {
        title: `Variant ${variant || 'default'}`,
        variant,
        solid: true,
      })
    },
  },
}
</script>

<style scoped>
button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}
.calendar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
p {
  color: grey;
}
.text-container {
  padding: 0.5rem;
}
</style>
