import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBIGojJ752HeYKr7VglWkf20xzKy56GPh8',
  authDomain: 'crwn-db-9092e.firebaseapp.com',
  databaseURL: 'https://crwn-db-9092e.firebaseio.com',
  projectId: 'crwn-db-9092e',
  storageBucket: '',
  messagingSenderId: '506721826174',
  appId: '1:506721826174:web:4ad966246681804c'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
