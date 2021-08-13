import database from '../firebase/firebase';
export const loadComments = async (disID) => {
	try {
		let data = [];
		const docs = await database.collection('discussions').doc(disID).get();
		data.push(docs.data());
		return data;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};
