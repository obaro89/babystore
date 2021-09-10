import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
	const { isLoggedIn } = useSelector(state => state.admin);
	return (
		<section class='footer'>
			&copy; 2021 Osaretin{' '}
			<span>
				{isLoggedIn ? (
					<Link>Logout</Link>
				) : (
					<Link to='/admin'>Admin</Link>
				)}
			</span>
		</section>
	);
};

export default Footer;
