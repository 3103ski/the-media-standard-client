// --> React
import React from 'react';

// --> Packages
import { intFromPx } from 'util';

// --> Project Imports
import { TeamMemberCard, Section, Loading } from 'components';
import { fetchTeam } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Component Import
import Style from './aboutTeamSection.module.scss';

export default function AboutTeamSection() {
	const [isMobile, setIsMobile] = React.useState(null);
	const [teamMembers, setTeamMembers] = React.useState(null);

	// Fetch team member data
	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`tms_team_members`, setTeamMembers, fetchTeam, null, 'teamMembers');
	}, []);

	// Manage mobile state to toggle section fluid state
	const mobileCheck = React.useCallback(() => {
		const width = window.innerWidth;
		const mBreakpoint = intFromPx(Style.bp_tablet);

		if (width < mBreakpoint) {
			if (!isMobile) setIsMobile(true);
		} else {
			if (isMobile === true) setIsMobile(false);
		}
	}, [isMobile]);

	React.useEffect(() => {
		if (!isMobile) {
			mobileCheck();
		}
	}, [isMobile, mobileCheck]);

	React.useEffect(() => {
		window.addEventListener('resize', mobileCheck);
		return () => window.removeEventListener('resize', mobileCheck);
	});

	return (
		<Section fluid={isMobile === true ? false : true}>
			{!teamMembers ? (
				<Loading size='small' />
			) : (
				<TeamMemberCard.Wrapper>
					{teamMembers.map((t) => (
						<TeamMemberCard key={`${t.title}_${Math.random()}`} item={t} />
					))}
				</TeamMemberCard.Wrapper>
			)}
		</Section>
	);
}
