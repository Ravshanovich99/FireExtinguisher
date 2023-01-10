<template>
  <div :class="$store.state.darkMode ? 'dark-mode' : 'light-mode'">
    <NavbarNavMenu />
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.darkMode) {
      this.$store.commit('initializeTheme')
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 350ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
.dark-mode {
  background: linear-gradient(
    to right,
    rgba(13, 17, 23, 1) 35%,
    rgba(15, 89, 93, 0.979) 100%
  );
  color: #fff;
  transition: 0.5s;
}

.light-mode {
  /* background: linear-gradient(
    to right,
    rgba(255, 255, 255) 50%,
    rgba(12, 91, 95, 0.9785434071089373) 100%
  ); */
  background: #fff;
  transition: 0.5s;
}
</style>
