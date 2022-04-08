import React from 'react';

export const Header = () => {
	return (
		<header className="header">
			<div className="header-icon">
				<img src="icon user" alt="" className="header-icon--img" />
			</div>
			<div className="header-input">
				<input type="text" />
			</div>
			<div className="header-icon">
				<img src="icon search" alt="" className="header-icon--img" />
			</div>
		</header>
	);
};
