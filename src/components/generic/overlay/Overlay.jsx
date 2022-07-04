// --> React
import React from 'react';

// --> Component Imports
import Style from './overlay.module.scss';

export default function Overlay({ type = 'mid' }) {
	return <div className={Style.Overlay} data-type={type} />;
}

Overlay.Sibling = ({ children }) => {
	return <div className={Style.SiblingWrapper}>{children}</div>;
};
