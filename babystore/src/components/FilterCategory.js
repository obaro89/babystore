import React from 'react';

const FilterCategory = ({ openCloseMenu }) => {
	return (
		<section>
			<section className='filters'>
				<div className='inner-filter'>
					<p>Baby</p>
					<p>Toddler</p>
					<p>Health</p>
					<p>Parenting</p>
					<p>pregnancy</p>
					<p>Shopping</p>
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
