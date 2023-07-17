'use client';
import styled from 'styled-components';
import ResponsiveBox from '@/components/common/ResponsiveBox';
import AnalMoreTopBar from '@/components/analysis-more/AnalMoreTopBar';
import PlayerInfo from '@/components/analysis-more/PlayerInfo';
import Article from '@/components/analysis-more/Article';

export default function AnalysisMore() {
	return (
		<>
			<Wrapper>
				<AnalMoreTopBar />
				<PlayerInfo />
				<Article />
			</Wrapper>
		</>
	);
}

const Wrapper = styled(ResponsiveBox)`
	position: absolute;
	background-color: #222222;
	right: 0;
	transition: 1s ease;
	padding: 0px;
	&.open {
		transition: 1s ease;
		right: 331px;
	}
`;
