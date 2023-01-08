<template>
  <div class="Hero container">
    <div class="text-container">
      <h1 class="header">{{ data?.title }}</h1>
      <p class="snippet">{{ data?.subtitle }}</p>
      <NuxtLink to="/products">
        <ButtonsButton
          :text="'Посмотреть все'"
          :dark="!$store.state.darkMode"
        />
      </NuxtLink>
    </div>
    <div class="blob">
      <img
        src="../../assets/svg/blob.svg"
        alt="blob"
        :class="$store.state.darkMode ? 'yellow-shadow' : 'black-shadow'"
      />
    </div>
    <!-- <div class="gift-icon">
      <img
        :src="
          $store.state.darkMode
            ? require('../../assets/svg/gift-green.svg')
            : require('../../assets/svg/gift-yellow.svg')
        "
        alt="gift"
      />
      <img :src="data?.image" alt="gift-image" />
    </div> -->
  </div>
</template>

<script>
import './HeroSection.scss'

export default {
  data() {
    return {
      data: null,
    }
  },

  async mounted() {
    const { data } = await this.$axios.$get(
      'https://florida-gift-default-rtdb.firebaseio.com/hero_page.json'
    )
    this.data = data
  },
}
</script>