// --> React
import React from 'react';

//--> Packages
import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { Overlay } from 'components';

// --> Component Imports
import Style from './card.module.scss';

export default function Card({ item = { img: ' ', title: '', subtitle: '', content: '' } }) {
	const ref = React.createRef();

	const calcHeight = React.useCallback(() => {
		if (ref.current) {
			let el = ref.current.getBoundingClientRect();
			ref.current.style.height = `${el.width}px`;
		}
	}, [ref]);

	const Title = () => {
		let rest = item.title.split(' ').splice(1).join(' ');
		let first = item.title.split(' ')[0];
		return (
			<div className={Style.TitleWrapper}>
				<h1>{first}</h1>
				<h1>{rest}</h1>
				{item.subtitle && item.subtitle !== '' ? <p>{item.subtitle}</p> : null}
			</div>
		);
	};

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
		<Grid.Column mobile={16} tablet={8} computer={4} className={Style.Container} ref={ref}>
			<div className={Style.Inner} ref={ref}>
				<div className={Style.BackgroundWrapper}>
					<img className={Style.BackgroundImage} src={item.img} alt='team member' />
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
								<p className={Style.TextContent}>{item.content}</p>
							</div>
						</div>
					</div>
				</Overlay.Sibling>
			</div>
		</Grid.Column>
	);
}

Card.Wrapper = ({ children }) => (
	<Grid>
		<Grid.Row>{children}</Grid.Row>
	</Grid>
);
