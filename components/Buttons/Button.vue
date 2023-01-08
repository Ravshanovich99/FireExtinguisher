<template>
  <div :style="`width: ${width}`" class="button-container">
    <button v-if="sort === 'disabled'" class="button disabled" :type="type">
      {{ text }}
    </button>
    <button
      v-else
      :class="dark ? 'button dark' : 'button'"
      @click="$emit('click')"
    >
      <div class="button-info">
        <b-icon v-if="icon" class="b-icon" :icon="icon"></b-icon>
        <div class="button-text">{{ text }}</div>
      </div>
    </button>
  </div>
</template>

<script>
import './Button.scss'
export default {
  props: {
    sort: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    dark: {
      type: Boolean,
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>