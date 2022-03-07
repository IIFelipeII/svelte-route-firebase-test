import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD1PhFGP7Vezk9CkZYKb9nE4bnPGsEa8Gk",
    authDomain: "svelt-route-firebase.firebaseapp.com",
    projectId: "svelt-route-firebase",
    storageBucket: "svelt-route-firebase.appspot.com",
    messagingSenderId: "918801293740",
    appId: "1:918801293740:web:448a2c88183f8c552f1a09"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
// El observador solo se activa al iniciar o cerrar sesión
firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            resolve(user);
        }, reject);
    });
};

export {provider, auth, firebase}