//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import Filter from './components/Filter';
import Login from './components/admin/Login';
import AdminDashboard from './components/AdminDashboard';
import EditForm from './components/EditForm';

function App() {
	useEffect(() => {
		store.dispatch(getDiscussions());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Nav />
					<section id='content'>
						<Filter />
						<Notification />
						<Route exact path='/discussions' component={Discussions} />
						<Route exact path='/' component={Discussions} />
						<Route exact path='/articles' component={Articles} />
						<Route exact path='/addpost' component={NewPost} />
						<Route
							exact
							path='/discussions/:id/comments'
							component={Comments}
						/>
						{/**Routes for admin */}
						<Route exact path='/admin' component={Login} />
						<Route exact path='/admin/login' component={Login} />
						<Route
							exact
							path='/admin/dashboard'
							component={AdminDashboard}
						/>
						<Route
							exact
							path='/admin/edit/article/:id'
							component={EditForm}
						/>
					</section>
					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
