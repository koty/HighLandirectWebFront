import firebase from 'firebase'

// initialize Firebase

const config = {
  apiKey: '<API_KEY>',
  authDomain: '<AUTH_DOMAIN>',
  databaseURL: '<DATABASE_URL>',
  projectId: '<PROJECT_ID>',
  storageBucket: '<STORAGE_BUCKET>',
  messagingSenderId: '<MESSAGING_SENDER_ID>'
}
// console.log('firebase init')
// firebase.initializeApp(config)

// const database = firebase.database()

const firebaseApp = firebase.initializeApp(config)
const _db = firebaseApp.database()

const _customer_list_ref = _db.ref('customer_list')
const _order_list_ref = _db.ref('order_list')
export const auth = firebase.auth()
// export const storage = firebase.storage()

// export const getRef = function (path) {
//   return {
//     // ()=>{ db.ref(path) },
//     // getRef,
//     competitorsRef,
//     competitionRef
//   }
// }

export const db = _db
export const customer_list_ref = _customer_list_ref
export const order_list_ref = _order_list_ref
