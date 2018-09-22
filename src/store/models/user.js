export default {
  state: {
    name: '',
  },
  reducers: {
    setName(state, payload) {
      return { ...state, name: payload.name }
    },
  },
}
