<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container">
    <div
      :class="{
        'input-group': loginInputs || signUpInputs,
        'order-group': orderInputs,
        '': settingsInputs,
      }"
    >
      <div class="input-group-container">
        <h3 v-show="loginInputs" class="input-group-title">Вход в аккаунт</h3>
        <h3 vshow="signUpInputs" class="input-group-title">
          Зарегистрирование
        </h3>

        <!-- Sign up Inputs -->
        <form
          v-show="signUpInputs"
          class="form-container"
          @submit.prevent="signUpHandler"
        >
          <MdInputsTextInput
            v-model="signUpData.name"
            :type="'text'"
            :validate="signUpInputsValidate"
            :minChar="3"
            :placeholder="'Ваше имя'"
          />
          <MdInputsTextInput
            v-model="signUpData.phone"
            :type="'tel'"
            :validate="signUpInputsValidate"
            :minChar="9"
            :placeholder="'Ваш номер телефона'"
          />
          <MdInputsEmailInput
            v-model="signUpData.email"
            :validate="signUpInputsValidate"
          />
          <MdInputsTextInput
            v-model="signUpData.password"
            :type="'password'"
            :validate="signUpInputsValidate"
            :minChar="6"
            :placeholder="'Пароль'"
          />
          <div class="google-btn-container">
            <div class="google-btn" @click="signInWithGoogle">
              <b-icon class="b-icon" icon="google"></b-icon>
              Войти с Google
            </div>
          </div>
          <NuxtLink to="/login" class="account-info"
            >Уже есть аккаунт?</NuxtLink
          >
          <ButtonsButton
            :type="'submit'"
            :sort="signUpInputsValidation ? '' : 'disabled'"
            :text="'Зарегистрироваться'"
          />
        </form>

        <!-- Login Inputs -->
        <form
          v-show="loginInputs"
          class="form-container"
          @submit.prevent="loginHandler"
        >
          <MdInputsEmailInput
            v-model="loginData.email"
            :validate="loginInputsValidate"
          />
          <MdInputsTextInput
            v-model="loginData.password"
            :type="'password'"
            :validate="loginInputsValidate"
            :minChar="6"
            :placeholder="'Пароль'"
          />
          <div class="google-btn-container">
            <div class="google-btn" @click="signInWithGoogle">
              <b-icon class="b-icon" icon="google"></b-icon>
              Войти с Google
            </div>
          </div>
          <NuxtLink to="/signup" class="account-info">
            Ещё нет аккаунта?
          </NuxtLink>
          <ButtonsButton
            :type="'submit'"
            :sort="loginInputsValidation ? '' : 'disabled'"
            :text="'Вход'"
          />
        </form>

        <!-- Order Inputs -->
        <form v-show="orderInputs" @submit.prevent="orderProduct">
          <MdInputsTextInput
            v-model="orderData.name"
            :type="'text'"
            :validate="orderInputsValidate"
            :minChar="6"
            :placeholder="'Ваше имя'"
          />
          <MdInputsTextInput
            v-model="orderData.phone"
            :type="'tel'"
            :validate="orderInputsValidate"
            :minChar="9"
            :placeholder="'Ваш номер телефона'"
          />
          <ButtonsButton
            :type="'submit'"
            :sort="orderInputsValidation ? '' : 'disabled'"
            :text="'Заказать'"
          />
        </form>

        <!-- Settings Inputs -->
        <form
          v-show="settingsInputs"
          novalidate
          class="form-container profile-settings"
          @submit.prevent="updateUserProfile"
        >
          <div class="profile-settings-inp">
            <span class="profile-settings-inp__title">Имя:</span>
            <MdInputsTextInput
              v-model="settingsData.name"
              :type="'text'"
              :placeholder="''"
              :minChar="6"
              :validate="settingsInputsValidate"
            />
          </div>
          <div class="profile-settings-inp">
            <span class="profile-settings-inp__title">Номер:</span>
            <MdInputsTextInput
              v-model="settingsData.phone"
              :type="'tel'"
              :placeholder="''"
              :minChar="9"
              :validate="settingsInputsValidate"
            />
          </div>
          <div class="profile-settings-inp">
            <span class="profile-settings-inp__title">Эл. адрес:</span>
            <MdInputsEmailInput
              v-model="settingsData.email"
              :disabled="true"
              :type="'email'"
              :placeholder="''"
              :validate="true"
            />
          </div>
          <div class="profile-settings-inp">
            <span class="profile-settings-inp__title">О себе:</span>
            <MdInputsTextareaInput
              v-model="settingsData.bio"
              :placeholder="''"
              :validate="settingsInputsValidate"
            />
          </div>
          <ButtonsButton
            :type="'submit'"
            :sort="settingsInputsValidation ? '' : 'disabled'"
            :text="'Сохранить'"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import './InputGroup.scss'
export default {
  props: {
    /* 
    This component for form inputs with submit button, depending on props:
    */
    loginInputs: {
      type: Boolean,

      /* includes email and password inputs */
    },

    loginInputsValidate: {
      type: Boolean,

      /* Turns on validation for login form */
    },
    signUpInputs: {
      type: Boolean,

      /* includes email, pssword, name and phone inputs */
    },

    signUpInputsValidate: {
      type: Boolean,

      /* Turns on validation for signUp form */
    },

    orderInputs: {
      type: Boolean,

      /* includes name and phone inputs */
    },

    orderInputsValidate: {
      type: Boolean,

      /* Turns on validation for order form */
    },

    orderingProduct: {
      type: Object,
      default: null,

      /* product object, needed to orderInputs */
    },

    selectedSize: {
      type: String,
      default: '',

      /* selected size of ordering product */
    },

    settingsInputs: {
      type: Boolean,
    },

    settingsInputsValidate: {
      type: Boolean,
    },
  },
  data() {
    return {
      signUpData: {
        name: '',
        phone: '',
        email: '',
        password: '',
      },

      loginData: {
        email: '',
        password: '',
      },

      orderData: {
        name: this.$store.state.user?.name ? this.$store.state.user?.name : '',
        phone: this.$store.state.user?.phone
          ? this.$store.state.user?.phone
          : '',
      },

      settingsData: {
        name: this.$store.state.user?.name,
        phone: this.$store.state.user?.phone,
        email: this.$store.state.user?.email,
        bio: this.$store.state.user?.bio,
      },
    }
  },

  computed: {
    signUpInputsValidation() {
      if (this.signUpInputsValidate) {
        if (
          this.signUpData.name.length >= 3 &&
          this.signUpData.phone.length >= 9 &&
          this.emailValidation(this.signUpData.email) &&
          this.signUpData.password.length >= 6
        ) {
          return true
        }
        return false
      }
      return true
    },

    loginInputsValidation() {
      if (this.loginInputsValidate) {
        if (
          this.emailValidation(this.loginData.email) &&
          this.loginData.password.length >= 6
        ) {
          return true
        }
        return false
      }
      return true
    },

    orderInputsValidation() {
      if (this.orderInputsValidate) {
        if (
          this.orderData.name.length >= 6 &&
          this.orderData.phone.length >= 9
        ) {
          return true
        }
        return false
      }
      return true
    },

    getUser() {
      return this.$store.state.user
    },

    isUserProfileDataChanged() {
      /*
      checks if user changed his details when opened settings modal,
      (if user did not change his detaila no need to send request to server)
      this is for not to send unreqired requests to server.
      */
      if (
        this.getUser.name !== this.settingsData.name ||
        this.getUser.phone !== this.settingsData.phone ||
        this.getUser.email !== this.settingsData.email ||
        this.getUser.bio !== this.settingsData.bio
      ) {
        return true
      }
      return false
    },

    settingsInputsValidation() {
      if (this.settingsInputsValidate) {
        if (
          this.isUserProfileDataChanged &&
          this.settingsData.name.length >= 6 &&
          this.emailValidation(this.settingsData.email) &&
          this.settingsData.phone.length >= 9 &&
          this.settingsData.bio.length < 155
        ) {
          return true
        }
        return false
      }
      return true
    },

    authError() {
      return this.$store.getters.getAuthError
    },
  },

  methods: {
    emailValidation(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    async loginHandler() {
      await this.$store.dispatch(
        'signInUserWithEmailAndPassword',
        this.loginData
      )
      if (!this.authError) {
        this.loginData.email = ''
        this.loginData.password = ''
      }
    },

    async signUpHandler() {
      await this.$store.dispatch(
        'createUserWithEmailAndPassword',
        this.signUpData
      )
      if (!this.authError) {
        this.signUpData.name = ''
        this.signUpData.phone = ''
        this.signUpData.email = ''
        this.signUpData.password = ''
      }
    },

    async signInWithGoogle() {
      await this.$store.dispatch('signInWithGoogle')
    },

    async updateUserProfile() {
      await this.$store.dispatch('updateUserProfile', this.settingsData)
      this.$emit('hideModal')
    },

    async orderProduct() {
      // TO-DO: to send image
      const { title, description } = this.orderingProduct
      const orderInfo = `Customer: %0A Name: ${this.orderData.name} %0A Phone: ${this.orderData.phone} %0A %0A Ordered Product: %0A Title: ${title} %0A Description: ${description}, %0A %0A Selected size ${this.selectedSize}`
      await this.$store.dispatch('orderProduct', orderInfo)
      await this.$store.dispatch('addOrderToUserProfile', this.orderingProduct)
      this.$emit('closeModal')
    },
  },
}
</script>
