// --> React
import React from 'react';

// --> Packages
import { Ref } from 'semantic-ui-react';

// --> Project Imports
import { Section, Loading, Filters, ProjectCard } from 'components';
import { useFilterManager } from 'hooks';
import { checkSeshStorageAddIfNeeded } from 'util';
import { fetchProjects } from 'groq';

// --> Component Imports
import Style from './browseProjectsSection.module.scss';

export default function BrowseProjectsSection() {
	const stickyRef = React.createRef();

	const { renderItems, filterOptions, activeFilters, totalMatches, totalItems, handleFilterClick, clearFilters } =
		useFilterManager({
			rootKey: 'tags',
			subKey: 'title',
			queryFunctionSetter: (callback) =>
				checkSeshStorageAddIfNeeded(`tms__projects_browse`, callback, fetchProjects, null, 'projects'),
		});

	return !renderItems ? (
		<Loading size='screen' />
	) : (
		<div className={Style.Wrapper}>
			<Ref innerRef={stickyRef}>
				<Section fluid>
					<Filters
						itemsLabel='projects'
						stickyContext={stickyRef}
						fromHook={{
							activeFilters,
							filterOptions,
							totalItems,
							totalMatches,
							clearFilters,
							handleFilterClick,
						}}
					/>
					<Filters.Results renderItems={renderItems} isCol mapFunc={(p, i) => <ProjectCard project={p} />} />
				</Section>
			</Ref>
		</div>
	);
}
