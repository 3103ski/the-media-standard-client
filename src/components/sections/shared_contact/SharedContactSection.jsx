// --> React
import React from 'react';

// --> Project Imports
import { ContactForm, Section } from 'components';

// --> Component Imports
import Style from './sharedContactSection.module.scss';

export default function SharedContactSection() {
	return (
		<Section className={Style.Container}>
			<ContactForm />
		</Section>
	);
}
