import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'validator';
import { setNotification } from './../actions/notification';
import { addArticle } from '../actions/articles';

const AdminDashboard = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(state => state.admin);

	const [articleData, setArticleData] = useState({
		content: '',
		sourceLink: '',
		title: '',
		imageLink: '',
		source: '',
	});
	const onChange = e => {
		setArticleData({
			...articleData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async e => {
		e.preventDefault();
		if (
			isEmpty(content) ||
			isEmpty(title) ||
			isEmpty(source) ||
			isEmpty(sourceLink) ||
			isEmpty(imageLink)
		) {
			return dispatch(
				setNotification('All Fields are required', 'danger')
			);
		}

		addArticle(articleData).then(res => {
			if (res) {
				return dispatch(
					setNotification('A new article has been added', 'success', 2000)
				);
			}

			return dispatch(
				setNotification('Oops! an error occurred', 'danger')
			);
		});

		history.push('/articles');
	};
	const { title, imageLink, source, sourceLink, content } =
		articleData;

	return (
		<div className='add-post-content'>
			<section className='new-post'>
				<form className='add-post'>
					<p>
						<label for='Title'>Title</label>
						<textarea
							onChange={onChange}
							value={title}
							name='title'
							placeholder='Add a title for your Article'
							required
						></textarea>
					</p>
					<p>
						<label for='content'>Content</label>
						<textarea
							required
							onChange={onChange}
							value={content}
							name='content'
							placeholder='Enter Article content'
						></textarea>
					</p>
					<p>
						<label for='content'>Image</label>
						<input
							required
							onChange={onChange}
							value={imageLink}
							name='imageLink'
							className='author-input'
							placeholder='Enter Link to image'
						/>
					</p>
					<p>
						<label for='content'>Source</label>
						<input
							required
							onChange={onChange}
							value={source}
							name='source'
							className='author-input'
							placeholder='Enter The Source of Article'
						/>
					</p>

					<p>
						<label for='Author'>Source Link</label>
						<input
							required
							onChange={onChange}
							type='text'
							name='sourceLink'
							value={sourceLink}
							placeholder='Enter the link to article source'
							className='author-input'
						/>
					</p>

					<button onClick={onSubmit} className='btn btn-new-post large mt'>
						Post
					</button>
				</form>
			</section>
		</div>
	);
};

export default AdminDashboard;
