import React from 'react';
import './inputBase.scss';

export const InputBase = ({ img, type }) => {
	return (
		<div className="inputBase">
			<img className="inputBase-icon" src={img} alt="icon user" />
			<input className="inputBase-input" type={type} />
		</div>
	);
};
