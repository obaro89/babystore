import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortDiscussion } from '../actions/discussion';
import { useHistory } from 'react-router';

const FilterCategory = ({ openCloseMenu }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { discussions } = useSelector(state => state.discussions);
	const sortByCategory = typeOfSort => {
		dispatch(sortDiscussion(discussions, typeOfSort));
		history.push('/');
	};
	return (
		<section>
			<section className='filters'>
				<div className='inner-filter'>
					<p onClick={e => sortByCategory('baby')}>Baby</p>
					<p onClick={e => sortByCategory('toddler')}>Toddler</p>
					<p onClick={e => sortByCategory('health')}>Health</p>
					<p onClick={e => sortByCategory('parenting')}>Parenting</p>
					<p onClick={e => sortByCategory('pregnancy')}>pregnancy</p>
					<p onClick={e => sortByCategory('shopping')}>Shopping</p>
				</div>
				<div className='filter-label' onClick={openCloseMenu}>
					<i className='bi bi-funnel-fill space pink'></i>
					Filter
				</div>
			</section>
		</section>
	);
};

export default FilterCategory;
