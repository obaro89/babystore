import React from 'react';
import profilePhoto from '../img/profile.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import formatDate from '../utilities/dateFormater';
import Loading from './Layout/Loading';
import firebase from 'firebase';
import database from '../firebase/firebase';
import DeleteAction from './Delete';
import { setNotification } from '../actions/notification';

const Discussions = () => {
	const { isLoading, sortedDiscussions } = useSelector(
		state => state.discussions
	);
	const dispatch = useDispatch();
	const likePost = id => {
		database
			.collection('discussions')
			.doc(id)
			.update({
				likes: firebase.firestore.FieldValue.increment(1),
			});
	};

	const onDelete = (id, doc) => {
		if (
			window.confirm('Are you sure you want to delete this discussion?')
		) {
			database
				.collection(doc)
				.doc(id)
				.delete()
				.then(() => {
					dispatch(setNotification('Successfully deleted', 'success'));
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	return (
		<section>
			<div class='discussions'>
				{isLoading && <Loading />}
				{!isLoading &&
					(sortedDiscussions.length > 0 ? (
						sortedDiscussions.map(
							({ title, content, date, replies, likes, author, id }) => (
								<section className='discussion' key={id}>
									<DeleteAction onDelete={() => onDelete(id, 'discussions')} />
									<div className='poster'>
										<div className='poster-profile'>
											<img src={profilePhoto} alt='' />
											<p className='poster-details'>
												<span className='name'>{author}</span>
												<small>{formatDate(date)}</small>
											</p>
										</div>
										<div className='post'>
											<h3 className='post-title'>
												<Link
													className='link-title'
													to={`/discussions/${id}/comments`}
												>
													{title}
												</Link>
											</h3>
											<p className='post-content'>{content}</p>
											<p className='post-activities'>
												<span className='likes'>{likes} Likes</span>
												<span className='replies'>
													<Link
														to={`/discussions/${id}/comments`}
														className='links-reply'
													>
														{replies.length} Replies
													</Link>
												</span>
											</p>
											<p className='social'>
												<span className='like' onClick={() => likePost(id)}>
													<i className='bi bi-hand-thumbs-up-fill'></i>
												</span>
												<span className='reply'>
													<Link
														to={`/discussions/${id}/comments`}
														className='links-reply-icon'
													>
														<i className='bi bi-reply-fill'></i>
													</Link>
												</span>
												<span className='share'>
													<i className='bi bi-share-fill'></i>
												</span>
											</p>
										</div>
									</div>
								</section>
							)
						)
					) : (
						<p>No Records</p>
					))}
				<section id='post-btn'>
					<Link to='/addpost' class='btn btn-new-post links'>
						<i class='bi bi-pencil-square space'></i> New Post
					</Link>
				</section>
			</div>
		</section>
	);
};

export default Discussions;
