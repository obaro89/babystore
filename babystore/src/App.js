import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Layout/Nav';
import Discussions from './components/Discussions';
import Articles from './components/Articles';
import Footer from './components/Layout/Footer';
import NewPost from './components/NewPost';

function App() {
	return (
		<Router>
			<Fragment>
				<Nav />
				<Route exact path='/discussions' component={Discussions} />
				<Route exact path='/' component={Discussions} />
				<Route exact path='/articles' component={Articles} />
				<Route exact path='/addpost' component={NewPost} />
				<Footer />
			</Fragment>
		</Router>
	);
}

export default App;
