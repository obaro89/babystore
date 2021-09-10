import * as types from '../actionTypes/types';

const initialState = {
	discussions: [],
	isLoading: true,
	sortedDiscussions: [],
};
export const discussionReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.GET_DISCUSSIONS:
		case types.POST_DISCUSSION:
			return {
				...state,
				isLoading: false,
				discussions: payload,
				sortedDiscussions: payload,
			};

		case types.ISLOADING:
			return {
				...state,
				isLoading: true,
			};
		case types.STOP_LOADING:
			return {
				...state,
				isLoading: false,
			};
		case types.SORT_BY_CATEGORY:
		case types.SEARCH:
			return {
				...state,
				sortedDiscussions: payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export const articleReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case types.LOAD_ARTICLES:
			return {
				...state,
				articles: [...payload],
			};

		default:
			return state;
	}
};

export const alertReduder = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case types.SET_NOTIFICATION:
			return [...state, payload];

		case types.REMOVE_NOTIFICATION:
			return state.filter(alert => alert.id !== payload.id);

		default:
			return state;
	}
};

const initialAdminState = {
	isAdmin: false,
	isLoggedIn: false,
};
export const adminAuthReducer = (
	state = initialAdminState,
	action
) => {
	const { type } = action;
	switch (type) {
		case types.ISLOGGEDIN:
			return {
				...state,
				isAdmin: true,
				isLoggedIn: true,
			};

		default:
			return state;
	}
};
