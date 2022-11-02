<template>
  <div>
    <b-button id="show-btn" @click="showModal">Order now</b-button>

    <b-modal ref="my-modal" hide-footer title="Details to order">
      <div class="container">
        <form class="form-container">
          <b-form-input
            v-model.trim="name"
            type="text"
            placeholder="Enter name"
            class="form-input"
          ></b-form-input>
          <b-form-input
            v-model.trim="phone"
            type="tel"
            placeholder="Enter phone number"
            class="form-input"
          ></b-form-input>
        </form>
        <vc-date-picker color="red" is-dark is-range :value="null" />
      </div>
      <b-button
        id="show-btn"
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
  data() {
    return {
      name: '',
    }
  },
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
  color: #0b4f52;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: #ffcc71;
  font-weight: 700;
  transition: 0.5s;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
p {
  color: grey;
}
.form-container {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0.5rem;
}

.form-container .form-input {
  width: 100%;
}
</style>
