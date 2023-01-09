<template>
  <div :style="`width: ${width}`">
    <div class="form-group">
      <textarea
        :id="textareaDark ? 'textarea-dark' : 'textarea'"
        type="text"
        :class="
          errorMassage.length > 0
            ? 'form-control error textarea'
            : 'form-control textarea'
        "
        required
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <label
        for="textarea"
        :class="textareaDark ? 'textarea-label-dark' : 'textarea-label'"
        >{{ placeholder }}</label
      >
      <small v-show="errorMassage" class="error-massage">{{
        errorMassage
      }}</small>
    </div>
  </div>
</template>

<script>
import './MdInputs.scss'
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Ваш текст',
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
    maxChar: {
      type: Number,
      default: 155,
    },
    textareaDark: {
      type: Boolean,
    },
  },
  data() {
    return {
      errorMassage: '',
    }
  },
  watch: {
    value() {
      if (this.validate) {
        if (this.value.length > this.maxChar) {
          this.errorMassage = `Максимум символов ${this.maxChar}`
        } else this.errorMassage = ''
      }
    },
  },
}
</script>