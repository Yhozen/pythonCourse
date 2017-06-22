import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCCjnc1Ri6KAaWaT7R1oyI88EcINEeuINc",
  authDomain: "lodamosvuelta-64d7a.firebaseapp.com",
  databaseURL: "https://lodamosvuelta-64d7a.firebaseio.com",
  projectId: "lodamosvuelta-64d7a",
  storageBucket: "lodamosvuelta-64d7a.appspot.com",
  messagingSenderId: "163822376534"
}
firebase.initializeApp(config)
const database = firebase.database()
const auth = firebase.auth()

export { database, auth }
export default firebase
