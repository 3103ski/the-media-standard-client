// --> React
import React from 'react';

// --> Project Import
import { Section, Overlay } from 'components';
import { exploreHeaderBackground } from 'assets';

// --> Component Import
import Style from './workHeaderSection.module.scss';

export default function WorkHeaderSection() {
	return (
		<div className={Style.Wrapper} style={{ backgroundImage: `url(${exploreHeaderBackground})` }}>
			<Overlay type='dark' />
			<Section className={Style.Inner}>
				<Overlay.Sibling>
					<div className={Style.Title}>
						<h1>EXPLORE WHAT</h1>
						<h1>
							<span>WE'VE</span> BEEN
						</h1>
						<h1>UP TO</h1>
						<p>
							We offer a number of media services to help your brand shine. See what we’ve done for
							others.
						</p>
					</div>
				</Overlay.Sibling>
			</Section>
		</div>
	);
}
