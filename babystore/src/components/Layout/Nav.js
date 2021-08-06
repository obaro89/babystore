import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav id='nav'>
			<div id='header'>
				<h2 className='logo'>
					<Link to='/' className='links logo'>
						babystore
					</Link>
				</h2>
				<div className='tab-links'>
					<p className='links-a active'>
						<Link to='/discussions' className='links'>
							Discussions
						</Link>
					</p>
					<p className='links-b'>
						<Link to='/articles' className='links'>
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
					/>
				</div>
				<button className='search-btn'>
					<i className='bi bi-search'></i>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
