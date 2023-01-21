<template>
  <div class="Hero container">
    <div class="text-container">
      <h1 class="header">{{ data?.title }}</h1>
      <p class="snippet">{{ data?.subtitle }}</p>
      <div class="hero-button">
        <ButtonsButton
          :text="'Посмотреть все'"
          :dark="!$store.state.darkMode"
          @click="$router.push('/products')"
        />
      </div>
    </div>
    <div class="blob">
      <img src="~/assets/images/hero.png" alt="blob" />
    </div>
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
      `${process.env.DATABASE_URL}/hero_page.json`
    )
    this.data = data
  },
}
</script>
