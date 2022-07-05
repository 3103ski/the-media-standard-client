// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { Button, Section, Overlay } from 'components';
import { sliderPlaceholder } from 'assets';
import { PORTFOLIO } from 'routes';

// --> Component Imports
import Style from './homeSliderSection.module.scss';

export default function HomeSliderSection() {
	return (
		<div className={Style.Wrapper} style={{ backgroundImage: `url(${sliderPlaceholder})` }}>
			<Overlay type='secondary' />
			<Section>
				<Grid>
					<Overlay.Sibling>
						<Grid.Row>
							<Grid.Column computer={16} mobile={16}>
								<h1 className={Style.Title}>
									<span>A WHOLE</span>
									<span>OTHER</span>
									<span>LEVEL</span>
								</h1>
								<Link as={Link} to={PORTFOLIO}>
									<Button color='primaryTransp'>SEE WORK</Button>
								</Link>
							</Grid.Column>
						</Grid.Row>
					</Overlay.Sibling>
				</Grid>
			</Section>
		</div>
	);
}
