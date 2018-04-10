import firebase from 'firebase';

export const appName = "top-spin-9cfa5"

export const firebaseConfig = {
    apiKey: "AIzaSyAKGIegCMedxmgjrQlVeRIyJiXIqojn1ZI",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "516816900643"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();