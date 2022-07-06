// --> React
import React from 'react';

// Packages
// import { Icon } from '@iconify/react';

// --> Project Imports
import { HOME, PORTFOLIO, ABOUT, CONTACT } from 'routes';
// import { Button, Modal } from 'components';
// import { EMAIL } from 'icons';

// --> Components Imports
import Drawer from './drawer/Drawer';
import Link from './link/Link.jsx';
import Style from './mobileNav.module.scss';
import Toggle from './toggle/Toggle.jsx';
// import BackBtn from './backBtn/BackBtn';

export default function MobileNav() {
	const [open, toggleOpen] = React.useState(false);
	// const [contactOpen, toggleContactOpen] = React.useState(false);

	const ToggleLink = ({ to, children }) => (
		<Link toggle={toggleOpen} to={to}>
			{children}
		</Link>
	);

	return (
		<>
			{/* <div className={Style.ContactWrapper} data-toggle-open={open ? 1 : 0}>
				<div className={Style.ContactBtn} onClick={() => toggleContactOpen(true)}>
					<Icon icon={EMAIL} />
				</div>
				<Modal isOpen={contactOpen} title={`Contact Me`} callback={toggleContactOpen}>
					<Button.FluidWrapper>
						<Button
							as={Link}
							icon={SURVEY}
							to={REQUEST_QUOTE}
							onClick={() => toggleContactOpen(false)}
							fluid
							space='10y'>
							Project Survey
						</Button>
						<Button
							as={Link}
							icon={EMAIL}
							to={CONTACT}
							onClick={() => toggleContactOpen(false)}
							fluid
							space='10y'>
							Send A Message
						</Button>
					</Button.FluidWrapper>
				</Modal>
			</div> */}
			<Toggle toggle={() => toggleOpen(!open)} open={open} />
			{/* <BackBtn menuOpen={open} /> */}
			<div className={Style.Container}>
				<Drawer open={open} toggle={toggleOpen}>
					<Link.Container>
						<ToggleLink to={HOME}>HOME</ToggleLink>
						<ToggleLink to={ABOUT}>ABOUT US</ToggleLink>
						<ToggleLink to={PORTFOLIO}>SEE OUR WORK</ToggleLink>
						<ToggleLink to={CONTACT}>CONTACT</ToggleLink>
					</Link.Container>
				</Drawer>
			</div>
		</>
	);
}
