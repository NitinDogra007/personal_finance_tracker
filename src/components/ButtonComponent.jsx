import React from 'react';
import '../styles/button.css';

function ButtonComponent({ title, onClick }) {
	return (
		<button className="custom-button" onClick={onClick}>
			{title}
		</button>
	);
}

export default ButtonComponent;
