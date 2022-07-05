// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Grid, Image } from 'semantic-ui-react';

// --> Project Imports
import { Overlay, Section, Button } from 'components';
import { aboutHeaderPlaceholder, logoPatch } from 'assets';
import { CONTACT } from 'routes';

// --> Component Imports
import Style from './aboutLandingSection.module.scss';

export default function AboutLandingSection() {
	return (
		<div className={Style.Wrapper} style={{ backgroundImage: `url(${aboutHeaderPlaceholder})` }}>
			<Overlay.Sibling className={Style.Wrapper}>
				<Section>
					<Grid>
						<Grid.Row>
							<Grid.Column mobile={16} computer={4}>
								<Image src={logoPatch} fluid alt='Media Standard Logo' />
							</Grid.Column>
							<Grid.Column mobile={16} computer={11}>
								<h1>
									WE'VE SHOT <span>THOUSANDS</span> OF <span>VIDEOS</span> AND <span>PHOTOS</span>
								</h1>

								<Link to={CONTACT}>
									<Button>Get Started</Button>
								</Link>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Section>
			</Overlay.Sibling>
			<Overlay type='brand-reverse' />
		</div>
	);
}
