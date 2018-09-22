import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD0KBHD5GdrIOECCW6uh7022DhUeN9gMN4',
  authDomain: 'baby-superheroes.firebaseapp.com',
  databaseURL: 'https://baby-superheroes.firebaseio.com',
  projectId: 'baby-superheroes',
  storageBucket: 'baby-superheroes.appspot.com',
  messagingSenderId: '611215656805',
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

export { firestore }