import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDu1I6RCDm3O_HwbD2t1fMOqKCsIn85gQA",
  authDomain: "reactzzaria-b5b93.firebaseapp.com",
  projectId: "reactzzaria-b5b93",
  storageBucket: "reactzzaria-b5b93.appspot.com",
  messagingSenderId: "155151215295",
  appId: "1:155151215295:web:3b531ea721ae3b68f4f40a"
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
