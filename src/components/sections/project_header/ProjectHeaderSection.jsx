// --> React
import React from 'react';

// --> Packages
import { Image, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Section } from 'components';

// --> Component Imports
import Style from './projectHeaderSection.module.scss';

export default function ProjectHeaderSection({ project }) {
	return (
		<div className={Style.Container}>
			<Section>
				<Grid>
					<Grid.Row>
						<Grid.Column only='mobile' mobile={8} />

						{/*  MOBILE - TABLET LOGO */}
						<Grid.Column mobile={3} tablet={2} only='mobile tablet'>
							<Image src={project.client.logo.asset.url} alt='client logo' />
						</Grid.Column>

						{/* MOBILE YEAR TEXT */}
						<Grid.Column mobile={5} only='mobile' className={Style.Right}>
							<h1>{project.year}</h1>
							{!project.projectLink ? (
								<a target='_blank' href={'http://google.com'} rel='noreferrer'>
									Visit Website
								</a>
							) : null}
						</Grid.Column>

						{/* COMPUTER LOGO */}
						<Grid.Column computer={2} only='computer'>
							<Image src={project.client.logo.asset.url} alt='client logo' />
						</Grid.Column>

						{/* TITLE CONTENT */}
						<Grid.Column computer={12} mobile={16} tablet={11} className={Style.Center}>
							<h1>{project.title}</h1>
							{project.tags.length > 0 ? <h3>{project.tags.map((t) => t.title).join(', ')}</h3> : null}
						</Grid.Column>

						{/* TABLET - COMPUTER YEAR */}
						<Grid.Column computer={2} tablet={3} only='computer tablet' className={Style.Right}>
							<h1>{project.year}</h1>
							{!project.projectLink ? (
								<a target='_blank' href={'http://google.com'} rel='noreferrer'>
									Visit Website
								</a>
							) : null}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Section>
		</div>
	);
}
