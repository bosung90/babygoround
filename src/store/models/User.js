export default {
  state: {
    name: '',
  },
  reducers: {
    setUser(state, payload) {
      return payload
    },
    setName(state, payload) {
      return { ...state, name: payload.name }
    },
  },
}
