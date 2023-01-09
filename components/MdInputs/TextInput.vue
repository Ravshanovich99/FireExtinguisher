<template>
  <div :style="`width: ${width}`">
    <div class="form-group">
      <input
        :id="type"
        :type="type === 'email' ? 'text' : type"
        :class="errorMassage.length > 0 ? 'form-control error' : 'form-control'"
        required
        :value="value"
        autocomplete=""
        @input="
          $emit('input', $event.target.value)
          /* name of emit must be 'input' */
        "
      />
      <label :for="type">{{ placeholder }}</label>
      <span v-show="errorMassage" class="error-massage">{{
        errorMassage
      }}</span>
    </div>
  </div>
</template>

<script>
import './MdInputs.scss'
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Ваше имя',
    },
    value: {
      type: String,
      required: true,
      /* 
        name of this props must be "value", then we can get value of
        input from parent component by giving just "v-model".

        v-model = :value="text", @input="text = $event.target.value"
      */
    },
    width: {
      type: String,
      default: '100%',
    },
    validate: {
      type: Boolean, // enables watcher to watch input to avoid errors
    },
    minChar: {
      type: Number,
      default: 3,
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
        if (this.value.length < this.minChar) {
          this.errorMassage = `Минимум символов ${this.minChar}`
        } else {
          this.errorMassage = ''
        }
      }
    },
  },
}
</script>