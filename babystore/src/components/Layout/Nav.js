import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../../actions/discussion';
const Nav = () => {
	const dispatch = useDispatch();
	const { discussions } = useSelector(state => state.discussions);
	const [searchText, setSearchText] = useState(null);
	const onSubmit = e => {
		e.preventDefault();
		if (searchText !== null) {
			dispatch(search(discussions, searchText.toLowerCase()));
		}
	};
	const onChange = e => {
		setSearchText(e.target.value);
		if (searchText !== null) {
			dispatch(search(discussions, searchText.toLowerCase()));
		}
	};

	const [isActive, setIsActive] = useState(false);
	const [linkClicked, setLinkClicked] = useState('');
	let active;
	const setChanges = type => {
		setIsActive(true);
		setLinkClicked(type);
	};
	if (
		(isActive && linkClicked === 'discussion') ||
		(!isActive && linkClicked === '')
	) {
		active = 'link-a active';
	} else if (isActive && linkClicked === 'article') {
		active = 'link-b active';
	}
	return (
		<nav id='nav'>
			<div id='header'>
				<h2 className='logo'>
					<Link to='/' className='links logo'>
						babystore
					</Link>
				</h2>
				<div className='tab-links'>
					<p className={linkClicked === 'discussion' ? active : ''}>
						<Link
							to='/discussions'
							className='links'
							onClick={() => setChanges('discussion')}
						>
							Discussions
						</Link>
					</p>
					<p className={linkClicked === 'article' ? active : ''}>
						<Link
							to='/articles'
							className='links'
							onClick={() => setChanges('article')}
						>
							Articles
						</Link>
					</p>
				</div>
			</div>

			<div className='search-box'>
				<div className='overlay'></div>
				<div className='input-area'>
					<i className='bi bi-search'></i>
					<input
						type='search'
						className='search-input'
						placeholder='Enter a search keyword'
						onChange={onChange}
					/>
				</div>
				<button className='search-btn' onClick={onSubmit}>
					<i className='bi bi-search'></i>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
