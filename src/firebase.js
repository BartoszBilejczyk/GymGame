import Firebase from 'firebase'

// dev
//
// apiKey: "AIzaSyAKDTFUe4vVzARMtpfbLRR1LAdcblhtPzo",
// authDomain: "gymgame-dev.firebaseapp.com",
// databaseURL: "https://gymgame-dev.firebaseio.com",
// projectId: "gymgame-dev",
// storageBucket: "",
// messagingSenderId: "1087497234674"


export const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDRz0FIYdYna0R-SfAaNvrNhNfsz2h5z70",
  authDomain: "gymgame-6ed97.firebaseapp.com",
  databaseURL: "https://gymgame-6ed97.firebaseio.com",
  projectId: "gymgame-6ed97",
  storageBucket: "gymgame-6ed97.appspot.com",
  messagingSenderId: "66802876396"
})

const auth = firebaseApp.auth()
const db = firebaseApp.database();
const usersRef = firebaseApp.database().ref('users');
const activitiesRef = firebaseApp.database().ref('activities');
const badgesRef = firebaseApp.database().ref('badges');
const recipesRef = firebaseApp.database().ref('recipes');

export {
  auth,
  db,
  usersRef,
  activityRef,
  badgesRef,
  activitiesRef
}
