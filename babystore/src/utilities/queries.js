import database from '../firebase/firebase';
//import firebase from 'firebase';

//read image from firebase using url
// var storage = firebase.storage();
// var storageRef = storage.refFromURL(
// 	'gs://babystore-5779f.appspot.com/images/profile.jpg'
// );
// const imageURL = await storageRef.getDownloadURL();
// console.log(imageURL);

export const insertToDatabase = async (collection, data) => {
	try {
		const insert = await database.collection(collection).add(data);
		return insert.id;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};

export const removeFromDatabase = async (collection, id) => {
	try {
		await database.collection(collection).doc(id).delete();
		return true;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};
export const updateInDatabase = async (collection, id, data) => {
	try {
		await database.collection(collection).doc(id).update(data);
		return true;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};
export const readFromDatabase = async (collection) => {
	try {
		let data = [];
		const docs = await database.collection(collection).get();
		docs.forEach((doc) => data.push(doc.data()));
		return data;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};
