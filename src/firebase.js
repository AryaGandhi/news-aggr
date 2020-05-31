import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	// apiKey: "AIzaSyDox6SOsN-mXg8RX_IKyohag-EvM0TUYoc",
 //  	authDomain: "news-aggr-85157.firebaseapp.com",
 //  	databaseURL: "https://news-aggr-85157.firebaseio.com",
 //  	projectId: "news-aggr-85157",
 //  	storageBucket: "news-aggr-85157.appspot.com",
 //  	messagingSenderId: "631789271119",
 //  	appId: "1:631789271119:web:690a6d8e47672ec7c9d23a"

 	apiKey: "AIzaSyBFE__tF_TRgt6wZUAniNnT0R1IWG9f3GE",
    authDomain: "news-aggr-2.firebaseapp.com",
    databaseURL: "https://news-aggr-2.firebaseio.com",
    projectId: "news-aggr-2",
    storageBucket: "news-aggr-2.appspot.com",
    messagingSenderId: "1092112487273",
    appId: "1:1092112487273:web:5244d9c8d0b0957fe8e3f8",
    measurementId: "G-69GG9F6TV3"
});
const db = firebaseApp.firestore();


export {db};
