import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { PrimaryLayout } from './layout/primary';
// import { PublicLayout } from './layout/public';
import { firebase } from './firebase/firebase';


ReactDOM.render(
  <React.StrictMode>
    {/* <PublicLayout user={{ email: 'test' }} /> */}
    {/* <PrimaryLayout user={{ email: 'test' }} /> */}
    <PrimaryLayout />
  </React.StrictMode>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user) => {
  // console.log()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
