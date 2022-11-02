<template>
  <div class="Hero container">
    <div class="text-container">
      <h1 class="header">Florida's gifts for everybody</h1>
      <p class="snippet">True happiness comes by making others happy!</p>
      <NuxtLink to="/products">
        <button class="button btn">Go Looking</button>
      </NuxtLink>
    </div>
    <div class="gift-icon">
      <img src="~assets/svg/gift-icon.svg" alt="fire-extinguisher" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.Hero {
  height: 50vh;
  position: relative;
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}

@media (max-width: 1500px) {
  .Hero {
    padding-bottom: 30rem;
  }
}

.text-container {
  width: 50%;
  margin-top: 4rem;
}
.header {
  font-weight: 900;
  font-size: 4rem;
}
.snippet {
  color: grey;
  font-size: 1.25rem;
}
.image {
  width: 27.5rem;
  margin-top: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: #ffcc71;
  color: #0b4f52;
  width: 20rem;
  font-weight: 700;
  font-size: 1.3rem;
  transition: 0.5s;
}
.button:hover {
  width: 21.5rem;
}
@media (max-width: 500px) {
  .Hero {
    height: 40vh;
  }
}

.gift-icon {
  padding-top: 4rem;
}

.gift-icon img {
  width: 100%;
  height: 100%;
}
</style>