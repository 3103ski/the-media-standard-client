// --> React
import React from 'react';

// --> Packages
import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { Section } from 'components';

// --> Component Imports
import Style from './sectionFluid.module.scss';

export default function SectionFluid({ picture, children }) {
	return (
		<Section fluid className={Style.Outer}>
			<div className={Style.ImageHalf} style={{ backgroundImage: `url(${picture})` }} />
			<Section className={Style.Inner}>
				<Grid>
					<Grid.Row>
						<Grid.Column computer={8} className={Style.Content}>
							{children}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Section>
		</Section>
	);
}
