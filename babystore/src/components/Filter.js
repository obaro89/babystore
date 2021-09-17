import React, { Fragment, useState } from 'react';
import FilterCategory from './FilterCategory';
import FilterMenu from './FilterMenu';
import { useDispatch } from 'react-redux';
import { sortDiscussion } from '../actions/discussion';

const Filter = () => {
	const dispatch = useDispatch();
	let openClass = 'filter';
	const [showMenu, setShowMenu] = useState(false);

	const openCloseMenu = () => {
		setShowMenu(!showMenu);
	};
	const applyFilter = (discussions, sortType) => {
		dispatch(sortDiscussion(discussions, sortType));
	};

	if (showMenu) {
		openClass = 'filter open';
	}

	return (
		<Fragment>
			<FilterCategory openCloseMenu={openCloseMenu} />
			<FilterMenu
				openCloseMenu={openCloseMenu}
				openClass={openClass}
				applyFilter={applyFilter}
			/>
		</Fragment>
	);
};

export default Filter;
