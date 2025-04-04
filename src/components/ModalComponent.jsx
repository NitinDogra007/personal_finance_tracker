// ModalComponent.jsx
import React from 'react';
import '../styles/modal.css';

function ModalComponent({ showModal, handleClose }) {
	if (!showModal) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-btn" onClick={handleClose}>
					X
				</button>
				<h2>Add a Transaction</h2>
				{/* You can add your form or content here */}
				<form>{/* Your form elements for adding a transaction */}</form>
			</div>
		</div>
	);
}

export default ModalComponent;
