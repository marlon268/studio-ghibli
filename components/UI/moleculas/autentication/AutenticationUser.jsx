import React from 'react';
import { InputBase } from '../atomos/InputBase';
import { LabelBase } from '../atomos/labelBase';

export const AutenticationUser = () => {
	return (
		<div className="autenticationUser">
			<LabelBase text="User" />
			<InputBase img="icon user" type="text" /> // falta icono
		</div>
	);
};
