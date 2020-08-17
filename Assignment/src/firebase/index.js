import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDW3nIPqpVPtxuQx5uVpkYoMMMRWHCewJM",
    authDomain: "thegods-c550d.firebaseapp.com",
    databaseURL: "https://thegods-c550d.firebaseio.com",
    projectId: "thegods-c550d",
    storageBucket: "thegods-c550d.appspot.com",
    messagingSenderId: "226910312260",
    appId: "1:226910312260:web:927b6d2dff5c4eeac8a911",
    measurementId: "G-D2CLPRC995"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase