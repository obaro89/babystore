import './App.css';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Layout/Nav';
import Discussions from './components/Discussions';
import Articles from './components/Articles';
import Footer from './components/Layout/Footer';
import NewPost from './components/NewPost';
import { Provider } from 'react-redux';
import store from './store';
import { getDiscussions } from './actions/discussion';
import Notification from './components/Notification';
import Comments from './components/Comments';

function App() {
	useEffect(() => {
		store.dispatch(getDiscussions());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Nav />
					<Notification />
					<Route exact path='/discussions' component={Discussions} />
					<Route exact path='/' component={Discussions} />
					<Route exact path='/articles' component={Articles} />
					<Route exact path='/addpost' component={NewPost} />
					<Route exact path='/discussions/comments' component={Comments} />
					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
