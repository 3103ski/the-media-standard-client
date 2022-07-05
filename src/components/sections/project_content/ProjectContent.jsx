// --> React
import React from 'react';

// --> Packages
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { Section, TextWrapper } from 'components';

// --> Component Imports
import Style from './projectContent.module.scss';

export default function ProjectContent({ project }) {
	return !project || !project.description ? null : (
		<Section className={Style.Wrapper}>
			<TextWrapper>
				<h1>{project.title}</h1>
				<SanityBlockContent blocks={project.description} />
			</TextWrapper>
		</Section>
	);
}
