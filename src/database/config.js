import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyCjCZqvm1EV3-3ynWB2t4FdPRj4tzh06zY",
   authDomain: "photowall-23e0a.firebaseapp.com",
   databaseURL: "https://photowall-23e0a.firebaseio.com",
   projectId: "photowall-23e0a",
   storageBucket: "photowall-23e0a.appspot.com",
   messagingSenderId: "141021955025"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
