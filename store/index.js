/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-extra-boolean-cast */

import axios from 'axios'


export const state = () => ({
  darkMode: true,
  likedCards: [],
  cart: [],
  allCards: [],
  albums: [],
  portrets: [],
  glasses: [],
  user: false,
  authError: null,
  smallCards: {
    bests: {
      id: 1,
      title: 'Лучшие',
      cards: []
    },
    populars: {
      id: 2,
      title: 'Популярные',
      cards: []
    }
  },
  customerReviews: []
})


export const mutations = {

  setState(state, { data, reference }) {
    state[reference] = data
    for (const cardId in data.cards) {
      data.cards[cardId].id = cardId
      state.allCards.push(data.cards[cardId])
      data.cards[cardId].bests && state.smallCards.bests.cards.push(data.cards[cardId])
      data.cards[cardId].populars && state.smallCards.populars.cards.push(data.cards[cardId])
    }
  },

  updateUserPhotoMutation(state, userPhotoURL) {
    state.user.photo = userPhotoURL
  },

  setAuthError(state, error) {
    state.authError = error
  },

  clearAuthError(state) {
    state.authError = null
  },

  ON_AUTH_STATE_CHANGED_MUTATION(state) {
    state.user = false
  },

  setUserProfile(state, userProfile) {
    state.user = userProfile
    // console.log('state_user', state.user);
  },

  updateUserProfile(state, updatedUserData) {
    state.user.name = updatedUserData.name
    state.user.email = updatedUserData.email
    state.user.phone = updatedUserData.phone
    state.user.bio = updatedUserData.bio
  },

  changeTheme(state) {
    state.darkMode = !state.darkMode
    localStorage.setItem('darkMode', JSON.stringify(state.darkMode))
  },

  initializeTheme(state) {
    state.darkMode = JSON.parse(localStorage.getItem('darkMode'))
  },

  setCustomerReviews(state, data) {
    for (const id in data) {
      data[id].id = id
    }
    state.customerReviews = data
    // console.log(state.customerReviews);
  },

  /* LikedCard LocalStorage */


  pushCardsToLikedCards(state, id) {
    const likedCard = state.allCards.find(product => product.id === id)
    state.likedCards.push(likedCard)
    this.commit('updateLikedCardsLocalStorage')
  },

  deleteCardsFromLikedCards(state, deletingCard) {
    state.likedCards = state.likedCards.filter(card => card !== deletingCard)
    this.commit('updateLikedCardsLocalStorage')
  },

  updateLikedCardsLocalStorage(state) {
    localStorage.setItem('likedItems', JSON.stringify(state.likedCards))
  },

  initializeLikedCards(state) {
    state.likedCards = JSON.parse(localStorage.getItem('likedItems'))
  },

  /* Cart LocalStorage */


  pushCardToCart(state, id) {
    const orderedCard = state.allCards.find(product => product.id === id)
    state.cart.push(orderedCard)
    this.commit('updateCartLocalStorage')
  },

  deleteCardFromCart(state, deletingCard) {
    state.cart = state.cart.filter(card => card !== deletingCard)
    this.commit('updateCartLocalStorage')
  },

  updateCartLocalStorage(state) {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },

  initializeCart(state) {
    state.cart = JSON.parse(localStorage.getItem('cart'))
  },

}


export const getters = {

  getUserProfile: state => state.user,

  getAuthError: state => state.authError,

  getCardById: (state) => (id) => {
    return state.allCards.find(product => product.id === id)
  },

  isCardLiked: (state) => (id) => {
    return state.likedCards.find(likedCard => likedCard.id === id)
  },

  getLikedCards: (state) => state.likedCards,

  getCardsInCart: (state) => state.cart,


  isCardInCart: (state) => (id) => {
    return state.cart.find(orderedCard => orderedCard.id === id)
  },

  getAlbums: (state) => state.albums,

  getPortrets: (state) => state.portrets,

  getGlasses: (state) => state.glasses,

  getAllStateInOneArr: (state) => {
    return [state.albums, state.portrets, state.glasses];
  },

  getStateByName: (state) => (stateName) => {
    return state[stateName]
  },

  getSmallCards: state => state.smallCards,

  getCustomerReviews: state => state.customerReviews

}


export const actions = {

  async getDataByReferenceFromDb({ commit, dispatch }, reference) {
    try {
      const { data } = await axios.get(`${process.env.DATABASE_URL}/${reference}.json`)
      commit('setState', { data, reference })

    } catch (error) {
      // console.log(error);
    }
  },

  async getExactCardFromDb({ dispatch }, { stateName, cardId }) {
    try {
      const { data } = await axios.get(`${process.env.DATABASE_URL}/${stateName}/cards/${cardId}.json`)
      return data
    } catch (error) {
      // console.log(error);
    }
  },

  async getStateByNameFromDb({ dispatch }, stateName) {
    try {
      const { data } = await axios.get(`${process.env.DATABASE_URL}/${stateName}.json`)
      return data
    } catch (error) {
      // console.log(error);
    }
  },

  likedCardsHandler({ dispatch, commit, getters }, id) {
    const card = getters.isCardLiked(id)
    if (!!!card) {
      commit('pushCardsToLikedCards', id)
    } else {
      commit('deleteCardsFromLikedCards', card)
    }
  },

  cardsInCartHandler({ dispatch, commit, getters }, id) {
    const card = getters.isCardInCart(id)
    if (!!!card) {
      commit('pushCardToCart', id)
    } else {
      commit('deleteCardFromCart', card)
    }
  },


  /* User authentication with google web firebase  */

  onAuthStateChangedAction: async (ctx, { authUser, claims }) => {
    if (authUser) {
      await ctx.dispatch('getUserProfileFromDb', authUser.uid)
      // console.log('onAuthStateChangedAction', ctx.rootState.user);
    } else ctx.commit('ON_AUTH_STATE_CHANGED_MUTATION')
  },

  async getUserProfileFromDb({ state, dispatch, commit }, userUid) {
    try {
      const response = await this.$fire.database.ref(`users/${userUid}`)
      const { data } = await axios.get(response.toString() + '.json')
      // console.log('getUserProfileFromDb', data);
      if (data && !state.user) {
        commit('setUserProfile', data)
      }
    } catch (error) {
      // console.log(error)
    }
  },


  async signInUserWithEmailAndPassword({ dispatch, commit }, userData) {
    try {
      const result = await this.$fire.auth.signInWithEmailAndPassword(
        userData.email,
        userData.password
      )
      const user = result.user
      if (user) {
        // TO-DO: find bag when loggin in and fetch for one time
        await dispatch('getUserProfileFromDb', user.uid)
        $nuxt.$router.push('/profile')
        commit('clearAuthError')
      }
    } catch (error) {
      commit('setAuthError', error)
      // console.log(error);
    }
  },

  async createUserWithEmailAndPassword({ state, dispatch, commit }, userData) {
    try {
      const result = await this.$fire.auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      )
      const user = result.user
      if (user) {
        const data = {
          uid: user.uid,
          name: userData.name,
          photo: process.env.DEFAULT_PROFILE_PHOTO,
          phone: userData.phone,
          email: userData.email,
          password: userData.password,
          orders: '',
          coupons: '',
          bio: ''
        }
        commit('clearAuthError')
        commit('setUserProfile', data)
        // console.log('router to profile from create user', state.user);
        $nuxt.$router.push('/profile')
        await this.$fire.database.ref('users').child(user.uid).update(data)
      }
    } catch (error) {
      commit('setAuthError', error)
      // console.log(error);
    }
  },

  async signInWithGoogle({ state, dispatch, commit }) {
    try {
      const provider = await new this.$fireModule.auth.GoogleAuthProvider()
      const result = await this.$fire.auth.signInWithPopup(provider)
      const user = result.user

      if (user) {
        await this.$fire.database.ref('users').on('value', (e) => {
          const usersInDatabase = e.val()
          // console.log('usersInDatabase', usersInDatabase);
          let isUserInDatabase
          if (usersInDatabase) {
            isUserInDatabase = Object.keys(usersInDatabase).find(id => id === user.uid)
          } else {
            isUserInDatabase = false
          }
          // console.log('isUserInDatabase', !!isUserInDatabase);
          if (!!!isUserInDatabase) {
            // console.log('user is new');
            const data = {
              uid: user.uid,
              name: user.displayName,
              photo: user.photoURL,
              phone: user.phoneNumber ? user.phoneNumber : '',
              email: user.email,
              orders: '',
              coupons: '',
              bio: ''
            }
            commit('setUserProfile', data)
            this.$fire.database.ref(`users/${user.uid}`).update(data)
          }
          // console.log('router to profile from google signin', state.user);
          $nuxt.$router.push('/profile')
        })
      }

    } catch (error) {
      // console.log(error);
    }
  },

  async signOut({ dispatch }) {
    await this.$fire.auth.signOut()
  },

  async updateUserProfile({ state, dispatch, commit }, updatedUserData) {
    try {
      await this.$fire.database.ref('users').child(state.user.uid).update({
        name: updatedUserData.name,
        phone: updatedUserData.phone,
        email: updatedUserData.email,
        bio: updatedUserData.bio,
      })
      commit('updateUserProfile', updatedUserData)
      // console.log('updated');
    } catch (error) {
      // console.log(error);
    }
  },

  async updateUserPhoto({ state, dispatch, commit }, userPhoto) {
    const userPhotoStorageRef = await this.$fire.storage
      .ref('user_avatars')
      .child(state.user.uid) // same uid with user's data beacuse same uid deletes old photo and puts new
    await userPhotoStorageRef.put(userPhoto)
    const userPhotoURL = await userPhotoStorageRef.getDownloadURL()
    commit('updateUserPhotoMutation', userPhotoURL)
    await this.$fire.database.ref('users').child(state.user.uid).update({
      photo: userPhotoURL
    })
  },

  async publishReviewToDb({ dispatch, commit }, review) {
    await this.$fire.database.ref('reviews').push(review)
  },

  async getCustomerReviewsFromDb({ dispatch, commit }) {
    try {
      const { data } = await axios.get(`${process.env.DATABASE_URL}/reviews.json`)
      commit('setCustomerReviews', data)
    } catch (error) {
      // console.log(error);
    }
  },

  async orderProduct(dispatch, orderInfo) {
    try {
      const URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.BOT_CHAT_ID}&text=${orderInfo}&parse_mode=html`
      await fetch(URL);
    } catch (error) {
      // console.log(error);
    }
  },

  async addOrderToUserProfile({ state, dispatch }, orderedProduct) {
    try {
      if (!state.user) {
        return
      }
      await this.$fire.database.ref(`users/${state.user.uid}`).child('orders').push(orderedProduct)
    } catch (error) {
      // console.log(error);
    }
  }
}
