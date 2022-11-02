<template>
  <div :class="$store.state.darkMode ? 'dark-mode' : 'light-mode'">
    <NavMenu />
    <Nuxt />
  </div>
</template>


<style >
a.nuxt-link-exact-active {
}

.dark-mode {
  background: #252525;
  color: #fff;
}

.light-mode {
  background: #fff;
}
</style>