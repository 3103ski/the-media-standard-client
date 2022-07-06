// --> React
import React from 'react';

// --> Packages
import { Image, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Section } from 'components';
import { logo_bently, logo_champion, logo_feam, logo_ge, logo_flexport, logo_omaze, logo_marlins } from 'assets';

// --> Component Imports
import Style from './sharedPartnersSection.module.scss';

export default function SharedPartnersSection() {
	let logos = [
		logo_bently,
		logo_feam,
		logo_ge,
		logo_flexport,
		logo_champion,
		logo_omaze,
		logo_marlins,
		logo_ge,
		logo_flexport,
		logo_champion,
		logo_omaze,
		logo_marlins,
	];

	return (
		<div className={Style.Wrapper}>
			<Section>
				<Grid textAlign='center'>
					<Grid.Row>
						{[...logos].map((logo, i) =>
							i > 11 ? null : (
								<Grid.Column
									key={`${Math.random()}_${i}`}
									computer={4}
									tablet={8}
									mobile={5}
									className={Style.ImageColumn}>
									<Image src={logo} />
								</Grid.Column>
							)
						)}
					</Grid.Row>
				</Grid>
			</Section>
		</div>
	);
}
