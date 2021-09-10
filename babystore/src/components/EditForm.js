import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { isEmpty } from 'validator';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from './../actions/notification';
import { addArticle } from '../actions/admin';
import firebase from 'firebase';
import database from '../firebase/firebase';

const EditForm = () => {
	const params = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(state => state.admin);
	const [article, setArticle] = useState('');
	useEffect(() => {
		database
			.collection('articles')
			.doc(params.id)
			.get()
			.then(doc => {
				setArticle({ ...doc.data(), id: doc.id });
			});
	}, [article]);

	// const [articleData, setArticleData] = useState({
	// 	content: article.content,
	// 	sourceLink: '',
	// 	title: '',
	// 	imageLink: '',
	// 	source: '',
	// });

	// const { title, imageLink, source, sourceLink, content } =
	// 	articleData;
	// const onChange = e => {
	// 	setArticleData({
	// 		...articleData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

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

		// addArticle(articleData).then(res => {
		// 	if (res) {
		// 		return dispatch(
		// 			setNotification('A new article has been added', 'success')
		// 		);
		// 	}

		// 	return dispatch(
		// 		setNotification('Oops! an error occurred', 'danger')
		// 	);
		// });

		history.push('/articles');
	};

	return (
		<div className='add-post-content'>
			<section className='new-post'>
				<form className='add-post'>
					<p>
						<label for='Title'>Title</label>
						<textarea
							value={article.title}
							name='title'
							placeholder='Add a title for your Article'
							required
						></textarea>
					</p>
					<p>
						<label for='content'>Content</label>
						<textarea
							required
							value={article.content}
							name='content'
							placeholder='Enter Article content'
						></textarea>
					</p>
					<p>
						<label for='content'>Image</label>
						<input
							required
							value={article.imageLink}
							name='imageLink'
							className='author-input'
							placeholder='Enter Link to image'
						/>
					</p>
					<p>
						<label for='content'>Source</label>
						<input
							required
							value={article.source}
							name='source'
							className='author-input'
							placeholder='Enter The Source of Article'
						/>
					</p>

					<p>
						<label for='Author'>Source Link</label>
						<input
							required
							type='text'
							name='sourceLink'
							value={article.sourceLink}
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

export default EditForm;
