<template>
  <div class="toast-container">
    <b-toast
      :id="toastId"
      class="toast"
      :title="title"
      toaster="b-toaster-bottom-left"
      no-close-button
    >
      {{ text }}
    </b-toast>
  </div>
</template>

<script>
import './Toast.scss'
export default {
  props: {
    toastId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
</style>