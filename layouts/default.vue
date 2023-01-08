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

<style >
.dark-mode {
  background: #0d1117;
  color: #fff;
  transition: 0.5s;
}

.light-mode {
  background: #fff;
  transition: 0.5s;
}
</style>