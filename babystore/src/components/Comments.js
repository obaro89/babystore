import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from './Layout/Loading';
import photo from '../img/profile.jpg';
import formatDate from '../utilities/dateFormater';
import firebase from 'firebase';
import database from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from 'validator';
import { useDispatch } from 'react-redux';
import { setNotification } from '../actions/notification';

const Comments = (props) => {
	const [discussion, setDiscussion] = useState({
		author: '',
		date: '',
		title: '',
		replies: [],
		content: '',
	});

	let isLoading = false;
	const params = useParams();

	useEffect(() => {
		database
			.collection('discussions')
			.doc(params.id)
			.get()
			.then((data) => {
				setDiscussion(data.data());
			});
	}, [discussion, params.id]);

	const dispatch = useDispatch();
	const { author, date, title, replies, content } = discussion;
	const [commentInput, setCommentInput] = useState('');
	const [posterInput, setPosterInput] = useState('');

	const postComment = (e) => {
		e.preventDefault();
		if (isEmpty(commentInput) || isEmpty(posterInput)) {
			return dispatch(setNotification('Some Fields are Empty', 'danger'));
		}
		database
			.collection('discussions')
			.doc(params.id)
			.update({
				replies: firebase.firestore.FieldValue.arrayUnion({
					poster: posterInput,
					text: commentInput,
					replyID: uuidv4(),
				}),
			})

			.then(() => {
				setCommentInput('');
				setPosterInput('');
			});
	};
	return isLoading ? (
		<Loading />
	) : (
		<div className=' comment-content'>
			<section className='discussion'>
				<div className='poster'>
					<div className='poster-profile'>
						<img src={photo} alt='' />
						<p className='poster-details'>
							<span className='name'>{author}</span>
							<small>{formatDate(date)}</small>
						</p>
					</div>
					<div className='post'>
						<h3 className='post-title'>{title}</h3>
						<p className='post-content'>{content}</p>

						<p className='show-comments'>
							<button className='btn btn-comment'>
								{replies.length} Comments
							</button>
						</p>
					</div>

					<div className='comments'>
						{replies.map(({ replyID, text, poster }) => (
							<p className='comment-page' key={replyID}>
								<div className='poster-profile'>
									<p className='poster-details'>
										<span className='name'>{poster}</span>
									</p>
								</div>
								<div className='comment'>{text}</div>
							</p>
						))}
					</div>
					<form className='add-comment'>
						<p>
							<input
								type='text'
								name=''
								value={posterInput}
								placeholder='Your Name'
								onChange={(e) => setPosterInput(e.target.value)}
							/>
						</p>
						<p>
							<textarea
								type='text'
								name=''
								value={commentInput}
								placeholder='Your message here'
								onChange={(e) => setCommentInput(e.target.value)}
							></textarea>
						</p>

						<button className='btn' onClick={postComment}>
							Send
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Comments;
