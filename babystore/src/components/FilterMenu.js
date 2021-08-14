import React from 'react';

const FilterMenu = ({ openCloseMenu, openClass }) => {
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
							<li>Newest to oldest</li>
							<li>Oldest to newest</li>
							<li>Most Relevant</li>
						</ul>
					</li>
					<li>
						<a href='/'>By Date</a>
						<ul className='submenu hide'>
							<li>Last 1 hour</li>
							<li>Last 1 day</li>
							<li>Last 1 week</li>
							<li>Last Month</li>
						</ul>
					</li>
					<li>
						<a href='/'>By Categories</a>
						<ul className='submenu hide'>
							<li>Baby</li>
							<li>Toddler</li>
							<li>Health</li>
							<li>Parenting</li>
							<li>Pregnancy</li>
							<li>Shopping</li>
						</ul>
					</li>
				</ul>
			</div>
			<div id='bottom'>
				<div>
					<a href='/'>RESET</a>
				</div>
				<div>
					<a href='/'>APPLY</a>
				</div>
			</div>
		</div>
	);
};

export default FilterMenu;
