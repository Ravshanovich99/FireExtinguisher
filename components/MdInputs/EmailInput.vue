<template>
  <div :style="`width: ${width}`">
    <div class="form-group">
      <input
        id="email"
        :disabled="disabled"
        type="email"
        :class="errorMassage.length > 0 ? 'form-control error' : 'form-control'"
        required
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <label for="email">{{ placeholder }}</label>
      <span v-if="errorMassage.length" class="error-massage">{{
        errorMassage
      }}</span>
    </div>
  </div>
</template>

<script>
import './MdInputs.scss'
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Ваш email',
    },
    value: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    validate: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      errorMassage: '',
    }
  },
  computed: {
    validation() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.value)
    },
  },
  watch: {
    value() {
      if (this.validate) {
        if (!this.validation) {
          return (this.errorMassage = 'your@example.com')
        } else {
          return (this.errorMassage = '')
        }
      }
    },
  },
}
</script>