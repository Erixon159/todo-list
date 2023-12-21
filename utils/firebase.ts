// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// SDKs for Firebase products: https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAadQE5O_l_28gIawk45lrayFXX5oKT5k',
  authDomain: 'todo-list-database-ae89d.firebaseapp.com',
  databaseURL:
    'https://todo-list-database-ae89d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todo-list-database-ae89d',
  storageBucket: 'todo-list-database-ae89d.appspot.com',
  messagingSenderId: '981378573434',
  appId: '1:981378573434:web:b52baec10e68aef3c047c3',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
const firebaseDatabase = getDatabase(firebaseApp)

export default firebaseDatabase
