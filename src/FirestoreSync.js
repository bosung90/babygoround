import React from 'react'
import { firestore } from 'firebase/config'
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

    this.unsubsUser = firestore
      .collection('Users')
      .doc('pDvyJvfpwpUyo3NPc5nG')
      .onSnapshot(doc => {
        const userData = doc.data()
        dispatch.User.setUser(userData)
      })
  }
  componentDidUnmount() {
    this.unsubsEquipments && this.unsubsEquipments()
  }
  render() {
    return null
  }
}
