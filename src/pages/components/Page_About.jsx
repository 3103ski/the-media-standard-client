// --> React
import React from 'react';

// --> Project Imports
import { AboutLandingSection, AboutBioSection, AboutTeamSection, SharedContactSection } from 'components';

// --> Component Imports
import ViewWrapper from './ViewWrapper';

export default function AboutPage() {
	return (
		<ViewWrapper>
			<AboutLandingSection />
			<AboutBioSection />
			<AboutTeamSection />
			<SharedContactSection />
		</ViewWrapper>
	);
}
