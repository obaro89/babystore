import * as types from '../actionTypes/types';
import { v4 as uuidv4 } from 'uuid';

export const setNotification =
	(msg, notificationType, duration = 2000) =>
	dispatch => {
		const id = uuidv4();
		dispatch({
			type: types.SET_NOTIFICATION,
			payload: {
				id,
				msg,
				notificationType,
			},
		});

		setTimeout(() => {
			dispatch({
				type: types.REMOVE_NOTIFICATION,
				payload: {
					id,
				},
			});
		}, duration);
	};
