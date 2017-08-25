// Initialize Firebase
var config = {
  apiKey: "AIzaSyCa9u3nhMDm0TwoAdngSAcvjhQJKBjsBdM",
  authDomain: "bcs-db.firebaseapp.com",
  databaseURL: "https://bcs-db.firebaseio.com",
  projectId: "bcs-db",
  storageBucket: "bcs-db.appspot.com",
  messagingSenderId: "80169087428"
};
firebase.initializeApp(config);


var database = firebase.database();

//
database.ref("player-1").set({
	name: "",
	
});