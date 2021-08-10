import React from 'react';
import profilePhoto from '../img/profile.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import formatDate from '../utilities/dateFormater';

const Discussions = () => {
	const { discussions, isLoading } = useSelector((state) => state.discussions);

	return (
		<section id='content'>
			<div class='discussions'>
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
											<h3 className='post-title'>{title}</h3>
											<p className='post-content'>{content}</p>
											<p className='post-activities'>
												<span className='likes'>{likes.length} Likes</span>
												<span className='replies'>
													<Link to='/discussions/comments' className='links'>
														{replies.length} Replies
													</Link>
												</span>
											</p>
											<p className='social'>
												<span className='like'>
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
