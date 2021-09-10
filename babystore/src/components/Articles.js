import React, { useEffect, useState } from 'react';
import database from '../firebase/firebase';
import ArticleModal from './ArticleModal';
import DeleteAction from './Delete';
import EditArticle from './EditArticle';
import Loading from './Layout/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNotification } from '../actions/notification';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(state => state.admin);

	const [modalState, setModalState] = useState({
		title: '',
		content: '',
		source: '',
	});

	useEffect(() => {
		database
			.collection('articles')
			.orderBy('date', 'desc')
			.onSnapshot(snapShot => {
				let data = [];
				snapShot.docs.forEach(doc =>
					data.push({ ...doc.data(), id: doc.id })
				);
				dispatch({
					type: 'LOAD_ARTICLES',
					payload: data,
				});
				setArticles(data);
				setIsLoading(false);
			});
	}, []);

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
	return isLoading ? (
		<Loading />
	) : !isLoading && articles.length !== 0 ? (
		<div id='article-content'>
			{isLoggedIn && (
				<div className='add-article'>
					<Link
						to='/admin/dashboard'
						className='btn btn-new-post large mt linkpost'
					>
						Post Article
					</Link>
				</div>
			)}
			{
				<ArticleModal
					showModal={showModal}
					setShowModal={setShowModal}
					articleTitle={modalState.title}
					articleLink={modalState.source}
				/>
			}
			{articles.length > 0 &&
				articles.map(article => {
					return (
						<React.Fragment>
							<section className='articles'>
								<EditArticle articleID={article.id} />
								<DeleteAction
									onDelete={() => onDelete(articles.id, 'articles')}
								/>
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
									<img
										src={article.imageLink}
										alt=''
										onClick={() => {
											setShowModal(!showModal);
											setModalState({
												title: article.title,
												source: article.sourceLink,
											});
										}}
									/>
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
						</React.Fragment>
					);
				})}
		</div>
	) : (
		<React.Fragment>
			<h2 className='alert'>There are no articles</h2>
			{isLoggedIn && (
				<div className='add-article'>
					<Link
						to='/admin/dashboard'
						className='btn btn-new-post large mt'
					>
						Post Article
					</Link>
				</div>
			)}
		</React.Fragment>
	);
};

export default Articles;
