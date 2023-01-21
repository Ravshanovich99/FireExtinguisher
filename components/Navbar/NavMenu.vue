<template>
  <nav
    :class="
      $store.state.darkMode ? 'navbar navbar-dark' : 'navbar navbar-light'
    "
  >
    <NuxtLink class="navbar-logo" to="/">
      <img
        src="../../assets/images/logo-tr.png"
        alt="logo"
        class="logo-image"
      />
      <span class="logo-name">FLORIDA</span>
    </NuxtLink>

    <!-- Hamburger Menu  -->
    <div
      :class="burgerMenuOpen ? 'burger open' : 'burger'"
      @click="burgerMenuOpen = !burgerMenuOpen"
    >
      <span v-for="span in 3" :key="span"></span>
    </div>

    <ClientOnly>
      <ul :class="burgerMenuOpen ? 'navbar-items md' : 'navbar-items'">
        <li class="nav-item">
          <div class="nav-item heart">
            <NuxtLink to="/favourites" class="nav-link fav">
              <span v-if="burgerMenuOpen" class="fav-text">Избранные</span>
              <b-icon class="b-icon" icon="suit-heart"></b-icon>
              <span class="like-counter">{{
                $store.state.likedCards.length
              }}</span>
            </NuxtLink>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-item heart">
            <NuxtLink to="/cart" class="nav-link fav">
              <span v-if="burgerMenuOpen" class="fav-text">Корзина</span>
              <b-icon class="b-icon" icon="cart3"></b-icon>
              <span class="like-counter">{{ $store.state.cart.length }}</span>
            </NuxtLink>
          </div>
        </li>
        <li class="nav-item">
          <NuxtLink to="/products" class="nav-link">Продукты</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/reviews" class="nav-link">Отзывы</NuxtLink>
        </li>
        <li class="nav-item icons">
          <label for="theme-checkbox" class="toggler">
            <input
              id="theme-checkbox"
              type="checkbox"
              :checked="$store.state.darkMode ? false : true"
              @change="changeTheme"
            />
            <span class="ball"></span>
            <b-icon class="b-icon" icon="moon-stars"></b-icon>
            <b-icon class="b-icon" icon="sun"></b-icon>
          </label>
        </li>
        <li v-if="$store.state.user" class="nav-item user-avatar">
          <NuxtLink to="/profile">
            <img :src="$store.state.user.photo" alt="photo" />
            <span v-if="burgerMenuOpen">{{ $store.state.user.name }}</span>
          </NuxtLink>
        </li>
        <li v-else class="nav-item user-login">
          <NuxtLink to="/login" class="nav-link">
            <span
              :class="
                $store.state.darkMode
                  ? 'nav-item login-btn dark'
                  : 'nav-item login-btn'
              "
            >
              <b-icon class="b-icon" icon="person-plus"></b-icon>
            </span>
            <span v-if="burgerMenuOpen">Вход в аккаунт</span>
          </NuxtLink>
        </li>
      </ul>
    </ClientOnly>
  </nav>
</template>

<script>
import './NavMenu.scss'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      login: false,
      burgerMenuOpen: false,
    }
  },

  methods: {
    ...mapMutations(['changeTheme']),
  },
}
</script>
