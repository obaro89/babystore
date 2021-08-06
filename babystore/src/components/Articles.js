import React from 'react';

const Articles = () => {
	return (
		<div id='article-content'>
			<section className='articles'>
				<h3 className='art-source'>
					<a href='#'>The conversation.com</a>
				</h3>
				<h2 className='title'>Baby Immune Development</h2>
				<small>21 Jan 2020</small>
				<p className='art-img'>
					<img src='' alt='' />
				</p>
				<p className='short-content'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eaque
					sit quasi dolores magnam perspiciatis quos inventore eveniet
					doloremque maiores.....
				</p>
				<p className='social'>
					<span className className='like'>
						<i className='bi bi-hand-thumbs-up-fill'></i>&nbsp; 2
					</span>

					<span className='share'>
						<i className='bi bi-share-fill'></i>
					</span>
				</p>
			</section>

			<section className='articles'>
				<h3 className='art-source'>
					<a href='#'>The conversation.com</a>
				</h3>
				<h2 className='title'>Baby Immune Development</h2>
				<small>21 Jan 2020</small>
				<p className='art-img'>
					<img src='img/pregnant-woman.jpg' alt='' />
				</p>
				<p className='short-content'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eaque
					sit quasi dolores magnam perspiciatis quos inventore eveniet
					doloremque maiores.....
				</p>
				<p className='social'>
					<span className='like'>
						<i className='bi bi-hand-thumbs-up-fill'></i>
					</span>
					<span className='share'>
						<i className='bi bi-share-fill'></i>
					</span>
				</p>
			</section>
		</div>
	);
};

export default Articles;
