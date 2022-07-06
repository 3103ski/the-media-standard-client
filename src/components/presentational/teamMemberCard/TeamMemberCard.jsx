// --> React
import React from 'react';

//--> Packages
import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { Overlay } from 'components';

// --> Component Imports
import Style from './card.module.scss';

export default function TeamMemberCard({ item }) {
	const Title = () => {
		return (
			<div className={Style.TitleWrapper}>
				<h1>{item.firstName}</h1>
				<h1>{item.lastName}</h1>
				{item.title && item.title !== '' ? <p>{item.title}</p> : null}
			</div>
		);
	};

	const ref = React.createRef();

	const calcHeight = React.useCallback(() => {
		if (ref.current) {
			let el = ref.current.getBoundingClientRect();
			ref.current.style.height = `${el.width}px`;
		}
	}, [ref]);

	React.useEffect(() => {
		if (ref.current) {
			calcHeight();
		}
	}, [calcHeight, ref]);

	React.useEffect(() => {
		window.addEventListener('resize', calcHeight);
		return () => window.removeEventListener('resize', calcHeight);
	}, [calcHeight]);

	return (
		<Grid.Column mobile={16} tablet={8} computer={4} className={Style.Container}>
			<div className={Style.Inner} ref={ref}>
				<div className={Style.BackgroundWrapper}>
					<img className={Style.BackgroundImage} src={item.picture.asset.url} alt='team member' />
				</div>
				<Overlay pale type='brand-reverse' />
				<Overlay.Sibling>
					<div className={Style.Content}>
						<div className={Style.TitleInner}>
							<Title />
						</div>
						<div className={Style.ContentInner}>
							<div className={Style.Content}>
								<Title />
								<p className={Style.TextContent}>{item.bio}</p>
							</div>
						</div>
					</div>
				</Overlay.Sibling>
			</div>
		</Grid.Column>
	);
}

TeamMemberCard.Wrapper = ({ children }) => (
	<Grid>
		<Grid.Row>{children}</Grid.Row>
	</Grid>
);
