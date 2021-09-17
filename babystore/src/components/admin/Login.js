import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import * as types from '../../actionTypes/types';
import database from '../../firebase/firebase';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		database.collection('admin').get();
		dispatch({
			type: types.ISLOGGEDIN,
		});
		history.push('/articles');
	};

	const { username, password } = formData;
	return (
		<div className='add-post-content'>
			<section className='new-post'>
				<h1>LOGIN ADMIN</h1>
				<form className='add-post'>
					<p>
						<label for='Username'>Username</label>
						<input
							required
							onChange={onChange}
							type='text'
							name='username'
							value={username}
							placeholder='Enter your username'
							className='author-input'
						/>
					</p>
					<p>
						<label for='Password'>Password</label>
						<input
							required
							onChange={onChange}
							type='password'
							name='password'
							value={password}
							placeholder='Enter your password'
							className='author-input'
						/>
					</p>
					<p>
						<button
							onClick={onSubmit}
							className='btn btn-new-post large mt'
						>
							Login
						</button>
					</p>
				</form>
			</section>
		</div>
	);
};

export default Login;
