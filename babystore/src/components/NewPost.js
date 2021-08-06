import React from 'react';

const NewPost = () => {
	return (
		<div id='content' className='add-post-content'>
			<section className='new-post'>
				<form action='' className='add-post'>
					<p>
						<label for='Title'>Title</label>
						<textarea placeholder='Add a title for your post'></textarea>
					</p>
					<p>
						<label for='Desc'>Description</label>
						<textarea placeholder='Explain your problem'></textarea>
					</p>
					<p className='j-right'>
						<label for='anonymous'>
							Post Anonymously&nbsp;
							<input type='checkbox' name='' id='' />
						</label>
					</p>
					<p className='cat'>
						<h4>
							<small>Select Categories</small>
						</h4>
						<label for='anonymous'>
							Baby <input type='checkbox' name='' id='' />
						</label>
						<label for='anonymous'>
							Toddler <input type='checkbox' name='' id='' />
						</label>
						<label for='anonymous'>
							Shopping <input type='checkbox' name='' id='' />
						</label>
						<label for='anonymous'>
							Parenting <input type='checkbox' name='' id='' />
						</label>
						<label for='anonymous'>
							Health <input type='checkbox' name='' id='' />
						</label>
						<label for='anonymous'>
							Pregnancy <input type='checkbox' name='' id='' />
						</label>
					</p>

					<button className='btn btn-new-post large mt'>Post</button>
				</form>
			</section>
		</div>
	);
};

export default NewPost;
