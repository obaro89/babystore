import * as types from '../actionTypes/types';
import database from '../firebase/firebase';
import firebase from 'firebase';
import { setNotification } from './notification';

export const getDiscussions = () => async (dispatch) => {
	try {
		//listen for real time updates on database
		database
			.collection('discussions')
			.orderBy('date', 'desc')
			.onSnapshot((snapShot) => {
				dispatch({
					type: types.GET_DISCUSSIONS,
					payload: snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				});
			});
	} catch (error) {
		dispatch(setNotification('An Error Occurred', 'danger'));
	}
};

export const addDiscussion = async ({ title, content, author, category }) => {
	try {
		await database.collection('discussions').add({
			title,
			content,
			author,
			category,
			likes: [],
			replies: [],
			date: firebase.firestore.FieldValue.serverTimestamp(),
		});
		return true;
	} catch (error) {
		return false;
	}
};
