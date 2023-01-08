<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <ButtonsButton id="show-btn" :text="'Заказать сейчас'" @click="showModal" />

    <Modal ref="modal" :title="'Деталы для заказа'">
      <InputGroup
        :orderInputs="true"
        :orderInputsValidate="true"
        :orderingProduct="orderingProduct"
        :selectedSize="selectedSize"
        @closeModal="closeModal"
      />
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    orderingProduct: {
      type: Object,
      default: null,
    },
    selectedSize: {
      type: String,
      default: '',
    },
  },
  methods: {
    showModal() {
      if (!this.selectedSize && this.orderingProduct.stateName !== 'glasses') {
        this.$emit('showSizeToast')
        return
      }
      this.$refs.modal.showModal()
    },
    closeModal() {
      this.$refs.modal.hideModal()
      this.$emit('showOrderedToast')
    },
  },
}
</script>
