import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './secret';
// const firebaseConfig = require('./secret');
firebase.initializeApp(firebaseConfig.test);
const db = firebase.firestore();

export { firebase, db };
// export { firebase, database as default };
