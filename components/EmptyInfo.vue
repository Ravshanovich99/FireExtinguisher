<template>
  <div class="empty">
    <p class="empty__title">{{ title }}</p>
    <p class="empty__text">{{ text }}</p>
    <NuxtLink :to="path">
      <button class="empty__btn">{{ btnText }}</button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
