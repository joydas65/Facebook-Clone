import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPFiOUs7XYizK6CUNfjVibM-VB335wBjI",
    authDomain: "facebook-clone-8b55e.firebaseapp.com",
    databaseURL: "https://facebook-clone-8b55e.firebaseio.com",
    projectId: "facebook-clone-8b55e",
    storageBucket: "facebook-clone-8b55e.appspot.com",
    messagingSenderId: "6754409673",
    appId: "1:6754409673:web:f18ec03698ef4eaa318118",
    measurementId: "G-3VD744SR04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db