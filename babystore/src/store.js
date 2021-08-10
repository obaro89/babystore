import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
	alertReduder,
	articleReducer,
	discussionReducer,
} from './reducers/index';

const store = createStore(
	combineReducers({
		discussions: discussionReducer,
		articles: articleReducer,
		alert: alertReduder,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
