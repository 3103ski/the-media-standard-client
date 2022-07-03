// --> React
import React from 'react';

// --> Project Imports
import { HomeLandingSection, HomeSliderSection, HomeMediaBioSection } from 'components';

// --> Components Imports
import ViewWrapper from './ViewWrapper';

export default function HomePage() {
	return (
		<ViewWrapper>
			<HomeLandingSection />
			<HomeSliderSection />
			<HomeMediaBioSection />
		</ViewWrapper>
	);
}
