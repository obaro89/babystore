import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDiscussion } from '../actions/discussion';
import Loading from './Layout/Loading';
import { isEmpty } from 'validator';
import { setNotification } from '../actions/notification';

const NewPost = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [anonymous, setAnonymous] = useState(false);
	const [categories, setCategories] = useState([]);
	const [formData, setFormData] = useState({
		title: '',
		content: '',
		author: '',
	});

	const handleAnonymous = e => {
		setAnonymous(!anonymous);
		if (e.target.checked) {
			setFormData({
				...formData,
				author: 'Anonymous',
			});
		}
	};

	const handleCategories = e => {
		let { value, checked } = e.target;
		if (checked) {
			setCategories([...categories, value]);
		} else {
			setCategories(categories.filter(c => c !== value));
		}
	};

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		setIsLoading(true);
		if (isEmpty(title) || isEmpty(content) || isEmpty(author)) {
			setIsLoading(false);
			return dispatch(
				setNotification('Some Fields are Empty', 'danger')
			);
		}

		addDiscussion({ ...formData, category: categories }).then(resp => {
			setIsLoading(false);
			if (resp) {
				setFormData({ title: '', content: '', author: '' });
				dispatch(
					setNotification('Your new discussion has been posted', 'success')
				);
			}
		});
	};

	const { title, content, author } = formData;

	return isLoading ? (
		<Loading />
	) : (
		<div className='add-post-content'>
			<section className='new-post'>
				<form className='add-post'>
					<p>
						<label for='Title'>Title</label>
						<textarea
							onChange={onChange}
							value={title}
							name='title'
							placeholder='Add a title for your post'
							required
						></textarea>
					</p>
					<p>
						<label for='content'>Description</label>
						<textarea
							required
							onChange={onChange}
							value={content}
							name='content'
							placeholder='Explain your problem'
						></textarea>
					</p>
					{!anonymous && (
						<p>
							<label for='Author'>Name</label>
							<input
								required
								onChange={onChange}
								type='text'
								name='author'
								value={author}
								placeholder='Enter your name'
								className='author-input'
							/>
						</p>
					)}
					<p className='j-right'>
						<label for='anonymous'>
							<input
								onChange={handleAnonymous}
								type='checkbox'
								name='anonymous'
								id='anonymous'
								value='Anonymous'
							/>
							Post Anonymously
						</label>
					</p>
					<p className='cat'>
						<h4>
							<small>Select Categories</small>
						</h4>
						<label for='baby'>
							<input
								onChange={handleCategories}
								type='checkbox'
								name='baby'
								id='baby'
								value='baby'
							/>
							Baby
						</label>
						<label for='toddler'>
							<input
								onChange={handleCategories}
								type='checkbox'
								name='toddler'
								id='toddler'
								value='toddler'
							/>
							Toddler
						</label>
						<label for='shopping'>
							<input
								onChange={handleCategories}
								type='checkbox'
								name='shopping'
								id='shopping'
								value='shopping'
							/>
							Shopping
						</label>
						<label for='parenting'>
							<input
								onChange={handleCategories}
								type='checkbox'
								name='parenting'
								id='parenting'
								value='parenting'
							/>
							Parenting
						</label>
						<label for='health'>
							<input
								onChange={handleCategories}
								type='checkbox'
								name='health'
								id='health'
								value='health'
							/>
							Health
						</label>
						<label for='pregnancy'>
							<input
								onChange={handleCategories}
								type='checkbox'
								name='pregnancy'
								id='pregnancy'
								value='pregnancy'
							/>
							Pregnancy
						</label>
					</p>

					<button onClick={onSubmit} className='btn btn-new-post large mt'>
						Post
					</button>
				</form>
			</section>
		</div>
	);
};

export default NewPost;
