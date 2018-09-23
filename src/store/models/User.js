import { auth } from 'firebase/config'

export default {
  state: {
    email: null,
    id: null,
  },
  reducers: {
    setUser(state, payload) {
      return payload
    },
    unsetUser() {
      return {
        email: null,
        id: null,
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
