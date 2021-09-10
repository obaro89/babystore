import React from 'react';
import { useSelector } from 'react-redux';
import Slide from 'react-reveal/Slide';
//import {Alert} from 'react-bootstrap'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
	const alertState = useSelector(state => state.alert);
	return (
		alertState !== null &&
		alertState.length > 0 &&
		alertState.map(({ msg, notificationType }) => (
			<Slide right>
				<div className={`alert ${notificationType}`}>
					<div className='inner-msg'>
						<h6>Notification</h6>
						<p className='msg'>{msg}</p>
					</div>
				</div>
			</Slide>
		))
	);
};

export default Notification;
