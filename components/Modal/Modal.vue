<template>
  <b-modal ref="modal" hide-footer :title="title" class="b-modal">
    <div class="container">
      <div class="order-modal">
        <slot></slot>
      </div>
    </div>
  </b-modal>
</template>

<script>
import './Modal.scss'

export default {
  props: {
    /*

    For this component you have to use 'ref' to access 'showModal'
    method to show modal which falls from top and blocks page-scrolling

    */

    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    showModal() {
      this.$refs.modal.show()
    },

    hideModal() {
      this.$refs.modal.hide()
    },
  },
}
</script>

<style>
</style>