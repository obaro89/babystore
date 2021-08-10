import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
	const alertState = useSelector((state) => state.alert);
	return (
		alertState !== null &&
		alertState.length > 0 &&
		alertState.map((a) => (
			<div className='alert'>
				<div className='inner-msg'>
					<h6>Notification</h6>
					<p className='msg'>{a.msg}</p>
				</div>
			</div>
		))
	);
};

export default Notification;
