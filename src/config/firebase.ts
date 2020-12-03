import firebase from 'firebase/app';
import 'firebase/firestore';

const fbConfig = {
  apiKey: 'AIzaSyCrBa-75naASnVMtw-2FY0o5fXmDxj2BZ0',
  authDomain: 'fabmont-svc.firebaseapp.com',
  databaseURL: 'https://fabmont-svc.firebaseio.com',
  projectId: 'fabmont-svc',
  storageBucket: 'fabmont-svc.appspot.com',
  messagingSenderId: '276603970430',
  appId: '1:276603970430:web:c0df8ed8c78c29d7dec92f',
  measurementId: 'G-6VRP6JSV8B',
};

if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}

export const firestore = firebase.firestore();
export default firebase;
