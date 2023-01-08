<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <InputGroup :signUpInputs="true" :signUpInputsValidate="true" />
    <Toast :toastId="'signup-toast'" :text="errorMessage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: null,
    }
  },
  computed: {
    authError() {
      return this.$store.getters.getAuthError
    },
  },
  watch: {
    authError(fbError) {
      if (fbError.message.includes('auth/email-already-in-use')) {
        this.errorMessage = 'Этот email уже занят'
        return this.$bvToast.show('signup-toast')
      }
    },
  },
}
</script>

<style>
</style>