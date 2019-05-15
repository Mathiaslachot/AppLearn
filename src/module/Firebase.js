
import { firebase } from '@firebase/app';
import '@firebase/firestore'

const config = {
  apiKey: "AIzaSyBMYGzv1ad2EAjUQuLCnExXvQ8VvxyaqOc",
  authDomain: "serviceapp-1f3c5.firebaseapp.com",
  databaseURL: "https://serviceapp-1f3c5.firebaseio.com",
  projectId: "serviceapp-1f3c5",
  storageBucket: "serviceapp-1f3c5.appspot.com",
  messagingSenderId: "936591976992"
};
firebase.initializeApp(config);


export default firebase;