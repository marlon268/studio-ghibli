import React from 'react';
import { ButtonLogin } from '../atomos/ButtonLogin';

import { AutenticationPassword } from '../moleculas/AutenticationPassword';
import { AutenticationUser } from '../moleculas/AutenticationUser';

export const Autentication = () => {
	return (
		<div className="autentication">
			<AutenticationUser />
			<AutenticationPassword />
			<div className="autentication-container">
				<ButtonLogin className="autentication-container_button" />
			</div>
		</div>
	);
};
