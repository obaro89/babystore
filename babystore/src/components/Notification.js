import React from 'react';
import { useSelector } from 'react-redux';
import Slide from 'react-reveal/Slide';

const Notification = () => {
	const alertState = useSelector((state) => state.alert);
	return (
		alertState !== null &&
		alertState.length > 0 &&
		alertState.map((a) => (
			<Slide right>
				<div className='alert'>
					<div className='inner-msg'>
						<h6>Notification</h6>
						<p className='msg'>{a.msg}</p>
					</div>
				</div>
			</Slide>
		))
	);
};

export default Notification;
