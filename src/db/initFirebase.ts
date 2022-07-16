import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  connectFirestoreEmulator,
  enableMultiTabIndexedDbPersistence
} from 'firebase/firestore'
import {
  getAuth,
  connectAuthEmulator
  // signInWithCredential,
  // EmailAuthProvider
} from 'firebase/auth'

// the values to initialize the firebase app can be found in your firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBcITmkrMezPY-rreB_OghYysBXkT6NvGs",
  authDomain: "crushconfessions.firebaseapp.com",
  databaseURL: "https://crushconfessions-default-rtdb.firebaseio.com",
  projectId: "crushconfessions",
  storageBucket: "crushconfessions.appspot.com",
  messagingSenderId: "749112435728",
  appId: "1:749112435728:web:2d72827d76ca525d971695",
  measurementId: "G-C8XT60C1WN"
}

const initFirebase = async () => {
  try {
    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)
    const auth = getAuth(app)

    if (process.env.NODE_ENV !== 'production') {
      connectAuthEmulator(auth, 'http://localhost:9099')
      connectFirestoreEmulator(firestore, 'localhost', 8080)
      enableMultiTabIndexedDbPersistence(firestore)
      /**
       * The following code logins the user automatically to speed up development.
       * For this to work you first need to create a user and then run the command
       * yarn emulator:export, then import the data when starting the emulator
       * yarn firebase emulators:start --only firestore,auth --import=firestore_mock_data
       */
      // signInWithCredential(
      //   auth,
      //   EmailAuthProvider.credential('john@doe.com', '123123')
      // )
    }
  } catch (err) {
    console.error(err)
    return err
  }
}

export default initFirebase
