<template>
  <nav class="navbar navbar-expand-lg navbar-dark padding">
    <NuxtLink class="navbar-brand nav-link" to="/">
      <img src="../assets/images/logo.jpg" alt="logo" class="logo" />
      Florida's gifts
    </NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse ml-auto">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <NuxtLink to="/products" class="nav-link"
            >Products <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/my-items" class="nav-link"
            >My Items <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active icons">
          <b-icon
            class="b-icon"
            :icon="$store.state.darkMode ? 'moon-fill' : 'moon'"
            @click="darkModeActive"
          ></b-icon>
          <b-icon
            class="b-icon"
            :icon="!$store.state.darkMode ? 'sun-fill' : 'sun'"
            @click="lightModeActive"
          ></b-icon>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['darkModeActive', 'lightModeActive']),
  },
}
</script>

<style scoped>
.padding {
  padding: 0.6rem;
  background-color: #0b4f52;
}
.nav-left {
  margin-left: auto;
}

.nav-link {
  border-bottom: 1px solid transparent;
}

.logo {
  width: 10%;
  height: 10%;
}

.icons {
  width: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.navbar-nav {
  gap: 14px;
}

.b-icon {
  cursor: pointer;
}
</style>
