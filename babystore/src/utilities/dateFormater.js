import moment from 'moment';

function formatDate(date) {
	return moment(new Date(date.seconds * 1000)).format('ll');
}

export default formatDate;
