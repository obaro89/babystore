import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyBmvw6HEbTYtW_ONOtiS1wMKiP6ZLRtwPw',
	authDomain: 'babystore-5779f.firebaseapp.com',
	projectId: 'babystore-5779f',
	storageBucket: 'babystore-5779f.appspot.com',
	messagingSenderId: '987886391110',
	appId: '1:987886391110:web:38537d13c2df81a9ed9f47',
};
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}

const database = firebase.firestore();

export default database;
