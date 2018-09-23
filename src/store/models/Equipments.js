export default {
  state: {
    loading: true,
  },
  reducers: {
    setEquipments(state, payload) {
      return { ...payload, loading: false }
    },
  },
}
