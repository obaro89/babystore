import React, { Fragment, useState } from 'react';
import FilterCategory from './FilterCategory';
import FilterMenu from './FilterMenu';

const Filter = () => {
	let openClass = 'filter';
	const [showMenu, setShowMenu] = useState(false);

	const openCloseMenu = () => {
		setShowMenu(!showMenu);
	};

	if (showMenu) {
		openClass = 'filter open';
	}

	return (
		<Fragment>
			<FilterCategory openCloseMenu={openCloseMenu} />
			<FilterMenu openCloseMenu={openCloseMenu} openClass={openClass} />
		</Fragment>
	);
};

export default Filter;
