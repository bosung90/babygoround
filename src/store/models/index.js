export default {
  count: {
    state: 0,
    reducers: {
      increment(state, payload) {
        return state + payload
      },
    },
  },
}
