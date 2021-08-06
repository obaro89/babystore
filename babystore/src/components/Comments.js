import React from 'react';

const Comments = () => {
	return (
		<div id='content' class=' comment-content'>
			<section class='discussion'>
				<div class='poster'>
					<div class='poster-profile'>
						<img src='img/profile.jpg' alt='' />
						<p class='poster-details'>
							<span class='name'>John Doe</span>
							<small>15 July 2021</small>
						</p>
					</div>
					<div class='post'>
						<h3 class='post-title'>Nausea</h3>
						<p class='post-content'>How to combat early nausea in pregnancy</p>

						<p class='show-comments'>
							<button class='btn btn-comment'>Comments</button>
						</p>
						<p class='comment-page'>
							<div class='poster-profile'>
								<p class='poster-details'>
									<span class='name'>Mark Joe</span>
									<small>12 July 1991</small>
								</p>
							</div>
							<div class='comment'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda soluta sit modi, amet itaque fugiat distinctio cumque
								aliquid laboriosam iusto.
							</div>
						</p>
						<p class='comment-page'>
							<div class='poster-profile'>
								<p class='poster-details'>
									<span class='name'>Mark Joe</span>
									<small>12 July 1991</small>
								</p>
							</div>
							<div class='comment'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda soluta sit modi, amet itaque fugiat distinctio cumque
								aliquid laboriosam iusto.
							</div>
						</p>

						<form class='add-comment'>
							<input
								type='text'
								name=''
								value=''
								placeholder='Your message here'
							/>
							<button>Send</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Comments;
