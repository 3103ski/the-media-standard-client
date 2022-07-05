// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Project Imports
import { resMediaPlaceholder } from 'assets';
import { Button, TextWrapper, SectionFluid } from 'components';
import { CONTACT } from 'routes';

// --> Component Imports
import Style from './homeMediaBioSection.module.scss';

export default function HomeMediaBioSection() {
	return (
		<SectionFluid picture={resMediaPlaceholder}>
			<TextWrapper>
				<p className={Style.Text}>
					t perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
					rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
					explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
					consequuntur magni
				</p>
			</TextWrapper>
			<Link to={CONTACT}>
				<Button color='secondary'>Get Started</Button>
			</Link>
		</SectionFluid>
	);
}
