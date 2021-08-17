import React, { useEffect, useState } from 'react';
import database from '../firebase/firebase';
import Loading from './Layout/Loading';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		database
			.collection('articles')
			.orderBy('date', 'desc')
			.onSnapshot(snapShot => {
				let data = [];
				snapShot.docs.forEach(doc => data.push(doc.data()));
				setArticles(data);
				setIsLoading(false);
			});
	}, []);

	return isLoading ? (
		<Loading />
	) : !isLoading && articles.length !== 0 ? (
		<div id='article-content'>
			{articles.length > 0 &&
				articles.map(article => {
					return (
						<section className='articles'>
							<h3 className='art-source'>
								<a href={article.sourceLink}>{article.source}</a>
							</h3>
							<h2 className='title'>
								<a className='links' href={article.sourceLink}>
									{article.title}
								</a>
							</h2>
							<small>21 Jan 2020</small>
							<p className='art-img'>
								<a href={article.sourceLink}>
									<img src={article.imageLink} alt='' />
								</a>
							</p>
							<p className='short-content'>{article.content}</p>
							<p className='social'>
								<span className='like'>
									<i className='bi bi-hand-thumbs-up-fill'></i>&nbsp; 2
								</span>

								<span className='share'>
									<i className='bi bi-share-fill'></i>
								</span>
							</p>
						</section>
					);
				})}
		</div>
	) : (
		<h2 className='alert'>There are no articles</h2>
	);
};

export default Articles;
