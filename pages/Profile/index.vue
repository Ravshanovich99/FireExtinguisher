<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div v-if="userProfile" class="container user">
    <div class="user-details">
      <div class="user-image">
        <img :src="userProfile.photo" alt="user-image" />
        <label class="form-label user-image-label" for="userFile"
          ><b-icon class="b-icon" icon="camera"></b-icon
        ></label>
        <input
          id="userFile"
          type="file"
          class="form-control"
          @change="updateUserPhoto"
        />
      </div>
      <div class="user-info">
        <h4 class="user-name">{{ userProfile.name }}</h4>
        <p class="user-email">{{ userProfile.email }}</p>
        <ButtonsButton
          :text="'Редактировать профиль'"
          :icon="'gear'"
          :dark="!$store.state.darkMode"
          @click="$refs.modal.showModal()"
        />
        <Modal ref="modal" :title="'Редактировать профиль'">
          <InputGroup
            :settingsInputs="true"
            :settingsInputsValidate="true"
            @hideModal="hideModal"
          />
          <div class="logout-btn">
            <ButtonsButton :text="'Выход'" @click="signOut" />
          </div>
        </Modal>
        <Toast :toastId="'settings-toast'" :text="'Сохранено'" />
      </div>
      <div class="user-bio">
        <h4 class="user-bio__title">О себе</h4>
        {{ userProfile.bio }}
      </div>
    </div>
    <div class="user-items">
      <div class="user-coupons">
        <h3 class="coupons-title">Ваши купоны</h3>
        <div class="coupons">Скоро...</div>
      </div>
      <div class="user-orders">
        <div v-if="userProfile.orders">
          <h3 class="coupons-title">Ваши заказы</h3>
          <LargeCard :cards="userProfile.orders" />
        </div>
        <div v-else class="no-orders-info">
          <h3 class="coupons-title">Здесь появится ваши заказы</h3>
        </div>
      </div>
    </div>
  </div>
  <LoaderSkeleton v-else :productIdPage="true" />
</template>

<script>
import './Profile.scss'
export default {
  middleware: 'auth',
  data() {
    return {
      title: 'Профиль',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Подарки на любой вкус',
        },
      ],
    }
  },
  computed: {
    userProfile() {
      return this.$store.getters.getUserProfile
    },
  },
  methods: {
    hideModal() {
      this.$refs.modal.hideModal()
      this.$bvToast.show('settings-toast')
    },
    async updateUserPhoto($event) {
      const userPhoto = $event.target.files[0]
      await this.$store.dispatch('updateUserPhoto', userPhoto)
      this.$bvToast.show('settings-toast')
    },

    async signOut() {
      await this.$store.dispatch('signOut')
      this.$router.push('/login')
    },
  },
}
</script>
