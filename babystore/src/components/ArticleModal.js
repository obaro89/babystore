import React from 'react';
// import { Modal } from 'react-bootstrap';

const ArticleModal = ({
	showModal,
	setShowModal,
	articleTitle,
	articleLink,
}) => {
	return (
		<React.Fragment>
			{/*<Modal
			// 	show={showModal}
			// 	onHide={() => setShowModal(!showModal)}
			// 	dialogClassName='modal-90w'
			// 	aria-labelledby='example-custom-modal-styling-title'
			// 	size='xl'
			// >
			// 	<Modal.Header closeButton>
			// 		<Modal.Title id='example-custom-modal-styling-title'>
			// 			<h2>{articleTitle}</h2>
			// 		</Modal.Title>
			// 	</Modal.Header>
			// 	<Modal.Body>
			// 		<p>
			// 			<iframe
			// 				src={articleLink}
			// 				style={{ width: '100%', height: '400px' }}
			// 			/>
			// 		</p>
			// 	</Modal.Body>
			// </Modal>*/}
		</React.Fragment>
	);
};

export default ArticleModal;
