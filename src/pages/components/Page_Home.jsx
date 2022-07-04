// --> React
import React from 'react';

// --> Project Imports
import {
	HomeLandingSection,
	HomeSliderSection,
	HomeMediaBioSection,
	HomeBannerSection,
	SharedPartnersSection,
} from 'components';

// --> Components Imports
import ViewWrapper from './ViewWrapper';

export default function HomePage() {
	return (
		<ViewWrapper>
			<HomeLandingSection />
			<HomeSliderSection />
			<HomeMediaBioSection />
			<HomeBannerSection />
			<SharedPartnersSection />
		</ViewWrapper>
	);
}
