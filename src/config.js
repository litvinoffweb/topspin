import firebase from 'firebase';
import Rebase from 're-base';

export const appName = "top-spin-9cfa5"

export const firebaseConfig = {
    apiKey: "AIzaSyAKGIegCMedxmgjrQlVeRIyJiXIqojn1ZI",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "516816900643"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const base = Rebase.createClass(app.database());
  
  const database = firebase.database();