// --> React
import React from 'react';

// --> Packages
import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { resMediaPlaceholder } from 'assets';
import { Section, Button, TextWrapper } from 'components';

// --> Component Imports
import Style from './homeMediaBioSection.module.scss';

export default function HomeMediaBioSection() {
	return (
		<Section fluid className={Style.Outer}>
			<div className={Style.ImageHalf} style={{ backgroundImage: `url(${resMediaPlaceholder})` }} />
			<Section className={Style.Inner}>
				<Grid>
					<Grid.Row>
						<Grid.Column computer={8} className={Style.Content}>
							<TextWrapper>
								<p className={Style.Text}>
									t perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
									laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
									architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
									voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
								</p>
							</TextWrapper>
							<Button color='secondary'>Get Started</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Section>
		</Section>
	);
}
