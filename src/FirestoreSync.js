import React from 'react'
import { firestore, auth } from 'firebase/config'
import { dispatch } from 'store'

export default class FirestoreSync extends React.Component {
  componentDidMount() {
    this.unsubsEquipments = firestore
      .collection('Equipments')
      .onSnapshot(docs => {
        const equipments = {}
        docs.forEach(doc => {
          const equipmentData = doc.data()
          equipmentData.id = doc.id
          equipments[doc.id] = equipmentData
        })

        dispatch.Equipments.setEquipments(equipments)
      })

    this.unsubsAuth = auth.onAuthStateChanged(user => {
      if (user) {
        const { email, uid } = user
        firestore
          .collection('Users')
          .doc(uid)
          .set(
            {
              id: uid,
              email,
            },
            { merge: true }
          )
          .then(() => {
            this.unsubsUser && this.unsubsUser()
            this.unsubsUser = firestore
              .collection('Users')
              .doc(uid)
              .onSnapshot(doc => {
                const userData = doc.data()
                dispatch.User.setUser(userData)
              })
          })
      } else {
        this.unsubsUser && this.unsubsUser()
        dispatch.User.unsetUser()
      }
    })
  }
  componentWillUnmount() {
    this.unsubsEquipments && this.unsubsEquipments()
    this.unsubsAuth && this.unsubsAuth()
    this.unsubsUser && this.unsubsUser()
  }
  render() {
    return null
  }
}
