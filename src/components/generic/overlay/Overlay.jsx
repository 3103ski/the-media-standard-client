// --> React
import React from 'react';

// --> Component Imports
import Style from './overlay.module.scss';

export default function Overlay({ type = 'mid', pale = null }) {
	return <div className={Style.Overlay} data-type={type} data-pale={pale ? 1 : 0} />;
}

Overlay.Sibling = ({ children, className, ...rest }) => {
	return (
		<div className={`${Style.SiblingWrapper} ${className}`} {...rest}>
			{children}
		</div>
	);
};
