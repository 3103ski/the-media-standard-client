// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { Overlay } from 'components';
import { useSquareHeight } from 'hooks';
import { PORTFOLIO } from 'routes';

// --> Component Imports
import Style from './projectCard.module.scss';

export default function ProjectCard({ project }) {
	const ref = React.createRef();
	const { height } = useSquareHeight(ref);

	if (!project) return null;
	return (
		<Grid.Column computer={4} tablet={5} mobile={8}>
			<Link to={`${PORTFOLIO}/${project.slug.current}`}>
				<div
					className={Style.Wrapper}
					ref={ref}
					style={{ backgroundImage: `url(${project.mainImage.asset.url})`, width: '100%', height }}>
					<Overlay.Sibling>
						<div className={Style.Top}>
							<h3>{project.title}</h3>
						</div>
						<div className={Style.Bottom}>
							<h3>{project.year}</h3>
							<p>{project.tags.length > 0 ? project.tags.map((t) => t.title).join(', ') : null}</p>
						</div>
					</Overlay.Sibling>
					<Overlay type={'brand-reverse'} pale />
					<Overlay type={'light'} pale />
				</div>
			</Link>
		</Grid.Column>
	);
}
