<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <InputGroup :loginInputs="true" :loginInputsValidate="true" />
    <Toast :toastId="'login-toast'" :text="errorMessage" />
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
      if (fbError.message.includes('auth/user-not-found')) {
        this.errorMessage = 'Пользователя с таким email не существует'
        return this.$bvToast.show('login-toast')
      }
      if (fbError.message.includes('auth/wrong-password')) {
        this.errorMessage = 'Неверный пароль'
        return this.$bvToast.show('login-toast')
      }
    },
  },
}
</script>

<style>
</style>