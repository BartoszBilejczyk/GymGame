import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDRz0FIYdYna0R-SfAaNvrNhNfsz2h5z70",
  authDomain: "gymgame-6ed97.firebaseapp.com",
  databaseURL: "https://gymgame-6ed97.firebaseio.com",
  projectId: "gymgame-6ed97",
  storageBucket: "gymgame-6ed97.appspot.com",
  messagingSenderId: "66802876396"
})

export const db = firebaseApp.database();
