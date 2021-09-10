import * as types from '../actionTypes/types';
import database from '../firebase/firebase';
import firebase from 'firebase';

export const addArticle = articleData => async dispatch => {
	try {
		const { title, imageLink, source, sourceLink, content } =
			articleData;
		await database.collection('articles').add({
			title,
			imageLink,
			source,
			sourceLink,
			date: firebase.firestore.FieldValue.serverTimestamp(),
			content,
		});
		return true;
	} catch (error) {
		return false;
	}
};

export const deleteArticle = () => {};

export const updateArticle = () => {};

export const deleteComment = () => {};

export const deleteDiscussion = () => {};

export const adminLogout = () => {};
export const adminLogin = async (username, password) => {
	try {
	} catch (error) {}
};
