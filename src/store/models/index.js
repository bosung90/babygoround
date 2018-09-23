import User from './User'
import Equipments from './Equipments'

export { User, Equipments }

// export default {
//   count: {
//     state: 0,
//     reducers: {
//       increment(state, payload) {
//         return state + payload
//       },
//     },
//     actions: ({ dispatch, getState }) => ({
//       getCount() {
//         return getState().count
//       },
//       async incrementAsync() {
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         dispatch.count.increment(1)
//       },
//     }),
//   },
//   User,
//   Equipments,
// }
