import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDwcRh3j1z729rIDOAh6Gct7uRddZcu51Y",
    authDomain: "crossfit-app-cl.firebaseapp.com",
    databaseURL: "https://crossfit-app-cl.firebaseio.com",
    projectId: "crossfit-app-cl",
    storageBucket: "crossfit-app-cl.appspot.com",
    messagingSenderId: "956617764358"
};
var fire = firebase.initializeApp(config);
export default fire;

