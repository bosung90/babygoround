import { auth } from 'firebase/config'

export default {
  state: {
    email: null,
    id: null,
    loading: true,
  },
  reducers: {
    setUser(state, payload) {
      return { ...payload, loading: false }
    },
    unsetUser() {
      return {
        email: null,
        id: null,
        loading: false,
      }
    },
    setName(state, payload) {
      return { ...state, name: payload.name }
    },
  },
  actions: ({ dispatch, getState }) => ({
    getIsLoggedIn() {
      return !!auth.currentUser
    },
    getUserId() {
      return getState().User.id
    },
  }),
}
