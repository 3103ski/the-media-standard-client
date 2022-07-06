// --> React
import React from 'react';

// --> Packages
// import { Grid } from 'semantic-ui-react';
import { intFromPx } from 'util';

// --> Project Imports
import { TeamMemberCard, Section } from 'components';
import { team1, team2, team3, team4 } from 'assets';

// --> Component Import
import Style from './aboutTeamSection.module.scss';

export default function AboutTeamSection() {
	const [isMobile, setIsMobile] = React.useState(null);
	const team = [
		{
			title: 'Josh Smithers',
			subtitle: 'Video Director',
			img: team1,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
		{
			title: 'Josh Smithers Townsend',
			subtitle: 'Video Director',
			img: team2,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
		{
			title: 'Josh Smithers',
			subtitle: 'Video Director',
			img: team3,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
		{
			title: 'Josh Smithers',
			subtitle: 'Video Director',
			img: team4,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
	];

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
	console.log(isMobile);
	return (
		<Section fluid={isMobile === true ? false : true}>
			<TeamMemberCard.Wrapper>
				{team.map((t) => (
					<TeamMemberCard key={`${t.title}_${Math.random()}`} item={t} />
				))}
			</TeamMemberCard.Wrapper>
		</Section>
	);
}
