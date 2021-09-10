import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortDiscussion } from '../actions/discussion';
import { useHistory } from 'react-router';

const FilterCategory = ({ openCloseMenu }) => {
	const [activeState, setActiveState] = useState({
		isActive: null,
		categories: [
			{ name: 'baby' },
			{ name: 'toddler' },
			{ name: 'health' },
			{ name: 'parenting' },
			{ name: 'pregnancy' },
			{ name: 'shopping' },
		],
	});

	const dispatch = useDispatch();
	const history = useHistory();
	const { discussions } = useSelector(state => state.discussions);
	const sortByCategory = (typeOfSort, index) => {
		dispatch(sortDiscussion(discussions, typeOfSort));
		toggleActive(index);
		history.push('/');
	};

	const toggleActive = index => {
		setActiveState({
			...activeState,
			isActive: activeState.categories[index],
		});
	};
	const toggleActiveStyle = index => {
		return activeState.categories[index] === activeState.isActive
			? 'active-btn'
			: 'inactive';
	};
	return (
		<section className='row'>
			<section className='filters'>
				<div className='inner-filter'>
					{activeState.categories.map((cat, index) => (
						<p
							key={index}
							onClick={e => sortByCategory(cat.name, index)}
							className={toggleActiveStyle(index)}
						>
							{cat.name}
						</p>
					))}
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
