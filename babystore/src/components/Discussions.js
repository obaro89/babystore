import React from 'react';

const Discussions = () => {
	return (
		<section id='content'>
			<div class='discussions'>
				<section className='discussion'>
					<div className='poster'>
						<div className='poster-profile'>
							<img src='../../img/profile.jpg' alt='' />
							<p className='poster-details'>
								<span className='name'>John Doe</span>
								<small>July 15, 2021</small>
							</p>
						</div>
						<div className='post'>
							<h3 className='post-title'>Nausea</h3>
							<p className='post-content'>
								How to combat early nausea in pregnancy
							</p>
							<p className='post-activities'>
								<span className='likes'>2 Likes</span>
								<span className='replies'>4 Replies</span>
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
				<section id='post-btn'>
					<button class='btn btn-new-post'>
						<i class='bi bi-pencil-square space'></i> New Post
					</button>
				</section>
			</div>
		</section>
	);
};

export default Discussions;
