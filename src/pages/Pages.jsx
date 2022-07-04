// --> React
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

// --> Packages
import { AnimatePresence } from 'framer-motion';

// --> Project Imports
import { HOME, ABOUT, PORTFOLIO, CONTACT } from 'routes';
import { AboutPage, ContactPage, HomePage, PortfolioPage, ProjectTemplate } from './components';
import { scrollToTopOf } from 'util';

export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		// DEV NOTE --> View animations can be adjusted in 'src/util/framerMotion.js' file.
		<AnimatePresence exitBeforeEnter onExitComplete={() => scrollToTopOf()}>
			<Routes location={location} key={location.pathname}>
				<Route exact path={HOME} element={<HomePage />} />
				<Route exact path={ABOUT} element={<AboutPage />} />
				<Route exact path={CONTACT} element={<ContactPage />} />
				<Route exact path={PORTFOLIO} element={<PortfolioPage />} />
				<Route exact path={`${PORTFOLIO}/:slug`} element={<ProjectTemplate />} />
			</Routes>
		</AnimatePresence>
	);
}
