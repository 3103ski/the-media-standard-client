// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Project imports
import { Section, Overlay, Button } from 'components';
import { bannerBackground, logoPatch } from 'assets';
import { ARROW_RIGHT } from 'icons';
import { ABOUT } from 'routes';

// --> Component Imports
import Style from './homeBannerSection.module.scss';

export default function HomeBannerSection() {
	return (
		<div className={Style.Outer}>
			<img src={logoPatch} className={Style.LogoPatch} alt='Media Standard Logo Patch' />
			<Section>
				<div className={Style.Content}>
					<h3>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu</h3>
					<Link to={ABOUT}>
						<Button icon={ARROW_RIGHT} iconLeft={false} txtcolor='light' color='none'>
							Meet Our Team
						</Button>
					</Link>
					{/* <Button icon={ARROW_RIGHT} iconLeft={false} txtcolor='light' color='none'>
						Learn how we work
					</Button> */}
				</div>
			</Section>
			<img className={Style.Picture} src={bannerBackground} alt='Banner Pic' />
			<Overlay type='light' />
		</div>
	);
}
