import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvzjjPPsT6LqaQ2wFfm9yHjKmVdvctmQ0",
    authDomain: "marioplan-606a7.firebaseapp.com",
    databaseURL: "https://marioplan-606a7.firebaseio.com",
    projectId: "marioplan-606a7",
    storageBucket: "marioplan-606a7.appspot.com",
    messagingSenderId: "625488396032"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;