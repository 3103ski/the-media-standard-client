// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Grid, Image } from 'semantic-ui-react';

// --> Project Imports
import { Section, Button } from 'components';
import { PORTFOLIO, CONTACT, ABOUT, HOME } from 'routes';
import { logoPatch } from 'assets';

// --> Component Imports
import Style from './footer.module.scss';

export function Footer() {
	return (
		<div className={Style.Outer}>
			<Section className={Style.Inner}>
				<Grid style={{ width: '100%' }}>
					<Grid.Row>
						<Grid.Column computer={4} className={Style.ImageCol}>
							<Link to={HOME}>
								<Image src={logoPatch} />
							</Link>
						</Grid.Column>

						<Grid.Column computer={3} className={Style.LinkCol}>
							<Link to={PORTFOLIO}>OUR WORK</Link>
						</Grid.Column>
						<Grid.Column computer={3} className={Style.LinkCol}>
							<Link to={CONTACT}>CONTACT US</Link>
						</Grid.Column>
						<Grid.Column computer={3} className={Style.LinkCol}>
							<Link to={ABOUT}>ABOUT</Link>
						</Grid.Column>
						<Grid.Column computer={3} className={Style.StartCol}>
							<Link to={CONTACT} className={Style.GetStarted}>
								<Button thin color='secondary'>
									GET STARTED
								</Button>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<div className={Style.Links}></div>
			</Section>
			<p>
				© 2022 THE MEDIA STANDARD INC.  •  Website developed & maintained by{' '}
				<a target='_blank' alt='maintained by' href='https://www.bryanswork.com' rel='noreferrer'>
					Bryan Jastrzembski
				</a>
			</p>
		</div>
	);
}
