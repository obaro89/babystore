import React from 'react';
import loadingImg from '../../img/loading.svg';

const Loading = () => {
	return (
		<div className='loading'>
			<p>
				<img src={loadingImg} alt='loading' />
			</p>
		</div>
	);
};

export default Loading;
