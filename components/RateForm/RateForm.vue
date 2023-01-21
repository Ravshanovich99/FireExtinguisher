<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container rate-form">
    <div class="user-details">
      <div class="user-info">
        <img :src="userProfile.photo" alt="user-image" />
        <div class="user-name">{{ userProfile.name }}</div>
      </div>
      <div class="form-groups">
        <MdInputsTextareaInput
          v-model="user.review"
          :textareaDark="!$store.state.darkMode"
          :placeholder="'Ваш отзыв'"
          :validate="true"
        />
      </div>
    </div>
    <b-form-rating
      v-model="user.rate"
      :color="$store.state.darkMode ? '#ffcc71' : '#0b4f52'"
      :class="$store.state.darkMode ? 'rate-inp dark' : 'rate-inp'"
    ></b-form-rating>
    <div class="publish-btn">
      <ButtonsButton
        :text="'Публиковать'"
        :dark="!$store.state.darkMode"
        :sort="user.rate && user.review ? '' : 'disabled'"
        @click="postReview"
      />
    </div>
    <Toast
      :toastId="'rate-toast'"
      :text="'Ваш отзыв опубликовано \n Спасибо за ваш отзыв!'"
    />
  </div>
</template>

<script>
import './RateForm.scss'
export default {
  data() {
    return {
      loading: false,
      user: {
        userName: this.$store.state.user?.name,
        userPhoto: this.$store.state.user?.photo,
        review: '',
        rate: null,
        cardId: this.$route.params.id,
      },
    }
  },
  computed: {
    userProfile() {
      return this.$store.getters.getUserProfile
    },
  },
  methods: {
    async postReview() {
      this.loading = true
      const review = this.user
      await this.$store.dispatch('publishReviewToDb', { review })
      this.loading = false
      this.$bvToast.show('rate-toast')
      this.user.review = ''
      this.user.rate = null
    },
  },
}
</script>

<style>
</style>