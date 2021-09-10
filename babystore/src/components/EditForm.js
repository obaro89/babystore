import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { isEmpty } from 'validator';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from './../actions/notification';
import firebase from 'firebase';
import database from '../firebase/firebase';
import { updateArticle } from './../actions/articles';

const EditForm = () => {
	const params = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(state => state.admin);
	const [article, setArticle] = useState('');

	const [articleData, setArticleData] = useState({});
	useEffect(() => {
		database
			.collection('articles')
			.doc(params.id)
			.get()
			.then(doc => {
				setArticle({ ...doc.data(), id: doc.id });
			});
	}, []);

	const onChange = event => {
		setArticleData({
			...articleData,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = async e => {
		e.preventDefault();
		if (
			isEmpty(article.content) ||
			isEmpty(article.title) ||
			isEmpty(article.source) ||
			isEmpty(article.sourceLink) ||
			isEmpty(article.imageLink)
		) {
			return dispatch(
				setNotification('All Fields are required', 'danger')
			);
		}

		try {
			await updateArticle(params.id, articleData);

			dispatch(
				setNotification('Article updated successfully', 'success', 2000)
			);
			history.push('/articles');
		} catch (error) {
			return dispatch(
				setNotification('Oops! an error occurred', 'danger')
			);
		}
	};

	return (
		<div className='add-post-content'>
			<section className='new-post'>
				<form className='add-post'>
					<p>
						<label for='Title'>Title</label>
						<textarea
							defaultValue={article.title}
							name='title'
							placeholder='Add a title for your Article'
							required
							onChange={onChange}
						></textarea>
					</p>
					<p>
						<label for='content'>Content</label>
						<textarea
							required
							defaultValue={article.content}
							name='content'
							placeholder='Enter Article content'
							onChange={onChange}
						></textarea>
					</p>
					<p>
						<label for='content'>Image</label>
						<input
							required
							defaultValue={article.imageLink}
							name='imageLink'
							className='author-input'
							placeholder='Enter Link to image'
							onChange={onChange}
						/>
					</p>
					<p>
						<label for='content'>Source</label>
						<input
							required
							defaultValue={article.source}
							name='source'
							className='author-input'
							placeholder='Enter The Source of Article'
							onChange={onChange}
						/>
					</p>

					<p>
						<label for='Author'>Source Link</label>
						<input
							required
							type='text'
							name='sourceLink'
							defaultValue={article.sourceLink}
							placeholder='Enter the link to article source'
							className='author-input'
							onChange={onChange}
						/>
					</p>

					<button onClick={onSubmit} className='btn btn-new-post large mt'>
						Update
					</button>
				</form>
			</section>
		</div>
	);
};

export default EditForm;
