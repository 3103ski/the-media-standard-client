// --> React
import React from 'react';

// --> Project Imports
import { Overlay } from 'components';
import { aboutHeaderPlaceholder } from 'assets';

// --> Component Imports
import Style from './aboutLandingSection.module.scss';

export default function AboutLandingSection() {
	return (
		<div className={Style.Wrapper} style={{ backgroundImage: `url(${aboutHeaderPlaceholder})` }}>
			<Overlay type='brand-reverse' />
		</div>
	);
}
