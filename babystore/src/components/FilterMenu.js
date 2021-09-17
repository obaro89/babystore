import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const FilterMenu = ({ openCloseMenu, openClass, applyFilter }) => {
	const { discussions } = useSelector(state => state.discussions);
	const [sortType, setSortType] = useState('newtoold');

	const onApply = () => {
		applyFilter(discussions, sortType);
		openCloseMenu();
	};
	return (
		<div id='filter-menu' className={openClass}>
			<div id='top'>
				<div className='filter-menu-title'>
					<span>Filters</span>
					<span className='cancel' onClick={openCloseMenu}>
						<i className='bi bi-x-lg'></i>
					</span>
				</div>
				<ul className='ul-menu'>
					<li className='li-active'>
						<span>By Sort</span>
						<ul className='submenu'>
							<li onClick={() => setSortType('newtoold')}>
								Newest to oldest
							</li>
							<li onClick={() => setSortType('oldtonew')}>
								Oldest to newest
							</li>
							<li onClick={() => setSortType('mostrelevant')}>
								Most Relevant
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div id='bottom'>
				<div>
					<a href='#' onClick={openCloseMenu}>
						RESET
					</a>
				</div>
				<div>
					<a href='#' onClick={onApply}>
						APPLY
					</a>
				</div>
			</div>
		</div>
	);
};

export default FilterMenu;
