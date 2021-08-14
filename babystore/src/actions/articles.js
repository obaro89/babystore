import * as types from '../actionTypes/types';
import database from '../firebase/firebase';
import firebase from 'firebase';
import { setNotification } from './notification';

export const getArticle = () => async (dispatch) => {
	try {
		//listen for real time updates on database
		database
			.collection('articles')
			.orderBy('date', 'desc')
			.onSnapshot((snapShot) => {
				dispatch({
					type: types.GET_ARTICLES,
					payload: snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				});
			});
	} catch (error) {
		dispatch(setNotification('An Error Occurred', 'danger'));
	}
};

export const addArticle = async ({ title, content, source, sourceLink imageLink }) => {
	try {
		await database.collection('articles').add({
			title,
			content,
			source,
            sourceLink,
			imageLink,
			date: firebase.firestore.FieldValue.serverTimestamp(),
		});
		return true;
	} catch (error) {
		return false;
	}
};
