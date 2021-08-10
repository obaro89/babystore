import * as types from '../actionTypes/types';
import database from '../firebase/firebase';
import firebase from 'firebase';
import { isEmpty } from 'validator';
import { setNotification } from './notification';

export const getDiscussions = () => async (dispatch) => {
	try {
		let data = [];
		const docs = await database.collection('discussions').get();
		docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
		dispatch({
			type: types.GET_DISCUSSIONS,
			payload: data,
		});
	} catch (error) {
		dispatch(setNotification('An Error Occurred', 'danger'));
	}
};

export const addDiscussion =
	({ title, content, author, category }) =>
	async (dispatch) => {
		if (isEmpty(title) || isEmpty(content) || isEmpty(author)) {
			return dispatch(
				setNotification('Please Enter Required Fields', 'danger')
			);
		}
		try {
			const insert = await database.collection('discussions').add({
				title,
				content,
				author,
				category,
				likes: [],
				replies: [],
				date: firebase.firestore.FieldValue.serverTimestamp(),
			});
			dispatch(setNotification('A new discusiion has been added', 'success'));
			let fetch = [];
			const docs = await database.collection('discussions').get();
			docs.forEach((doc) => fetch.push({ ...doc.data(), id: doc.id }));

			dispatch({
				type: types.POST_DISCUSSION,
				payload: fetch,
			});
		} catch (error) {
			dispatch(setNotification('An Error Occurred', 'danger'));
		}
	};
