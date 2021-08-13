import React from 'react';
import profilePhoto from '../img/profile.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import formatDate from '../utilities/dateFormater';
import Loading from './Layout/Loading';
import firebase from 'firebase';
import database from '../firebase/firebase';

const Discussions = () => {
	const { discussions, isLoading } = useSelector((state) => state.discussions);
	const likePost = (id) => {
		database
			.collection('discussions')
			.doc(id)
			.update({
				likes: firebase.firestore.FieldValue.increment(1),
			});
	};
	return (
		<section id='content'>
			<div class='discussions'>
				{isLoading && <Loading />}
				{!isLoading &&
					(discussions.length > 0 ? (
						discussions.map(
							({ title, content, date, replies, likes, author, id }) => (
								<section className='discussion' key={id}>
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
													<i className='bi bi-reply-fill'></i>
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
