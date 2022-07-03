// --> React
import React from 'react';

// --> Project imports
import { Section, Overlay, Button } from 'components';
import { bannerBackground } from 'assets';
import { ARROW_RIGHT } from 'icons';

// --> Component Imports
import Style from './homeBannerSection.module.scss';

export default function HomeBannerSection() {
	return (
		<div className={Style.Outer}>
			<Section>
				<div className={Style.Content}>
					<h3>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu</h3>
					<Button icon={ARROW_RIGHT} iconLeft={false} txtcolor='light' color='none'>
						Meet Our Team
					</Button>
					<Button icon={ARROW_RIGHT} iconLeft={false} txtcolor='light' color='none'>
						Learn how we work
					</Button>
				</div>
			</Section>
			<img src={bannerBackground} alt='broody dude graphic' />
			<Overlay type='lighten' />
		</div>
	);
}
