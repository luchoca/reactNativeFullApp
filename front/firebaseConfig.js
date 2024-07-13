import firebase from 'firebase/app';
import 'firebase/auth'; // Importa los módulos que necesites de Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyCpBDtBPhS8HS8qIUkmk6uNHRUfYD82xo0',
  authDomain: 'ecomreactnative-a971f.firebaseapp.com',
  projectId: 'ecomreactnative-a971f',
  storageBucket: 'ecomreactnative-a971f.appspot.com',
  messagingSenderId: '937085471503',
  appId: '1:937085471503:android:936dc00a9791c3f0b3cc7a',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
