// --> React
import React from 'react';

// --> Project Imports
import { WorkHeaderSection, BrowseWorkSection } from 'components';

// --> Component Imports
import ViewWrapper from './ViewWrapper';

export default function PortfolioPage() {
	return (
		<ViewWrapper>
			<WorkHeaderSection />
			<BrowseWorkSection />
		</ViewWrapper>
	);
}
