// --> React
import React from 'react';

// --> Project Imports
import { SectionFluid, Divider } from 'components';
import { aboutMainPlaceholder } from 'assets';

import Style from './aboutBioSection.module.scss';

export default function AboutBioSection() {
	return (
		<SectionFluid picture={aboutMainPlaceholder}>
			<div className={Style.Content}>
				<h1>OVER 10 YEARS OF MAKING AWESOME THINGS HAPPEN!</h1>
				<Divider />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sapiente doloremque officiis porro
					culpa accusamus suscipit, dignissimos vero libero voluptas odio accusantium delectus. Facere dolorem
					illo quas magni iure quasi.
				</p>
			</div>
		</SectionFluid>
	);
}
