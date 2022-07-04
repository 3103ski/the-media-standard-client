// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { logo_white_thumb } from 'assets';
import { motion_variants_nav } from 'util';
import { HOME } from 'routes';

// --> Component Imports
import Style from './branding.module.scss';

export default function NavBranding({ scrolled }) {
	return (
		<Link to={HOME} className={Style.NavBranding}>
			<motion.img
				src={logo_white_thumb}
				// animate={scrolled ? 'brandScroll' : 'brandNoScroll'}
				whileHover={'onBrandHover'}
				variants={motion_variants_nav.desktop}
				alt='desktop navigation branding'
			/>
		</Link>
	);
}
