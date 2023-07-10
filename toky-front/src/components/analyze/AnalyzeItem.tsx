'use client';

import styled from 'styled-components';

export interface AnalyzeItemProps {
	match: string;
	kWin: number;
	yWin: number;
}

export default function AnalyzeItem(props: AnalyzeItemProps) {
	const {match, kWin, yWin} = props;
	return (
		<Wrapper>
			<MatchContainer>{match}</MatchContainer>
			<BarContainer>
				<KoreaBar ratio={kWin / (kWin + yWin)} />
				<YonseiBar ratio={yWin / (kWin + yWin)} />
			</BarContainer>
			<InfoContainer>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<WinContainer>{kWin}승</WinContainer>
					<UnivContainer>고려대학교</UnivContainer>
				</div>
				<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
					<WinContainer style={{marginLeft: 'auto'}}>{yWin}승</WinContainer>
					<UnivContainer>연세대학교</UnivContainer>
				</div>
			</InfoContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 104px;
	width: 350px;
	color: rgba(255, 255, 255, 0.87);
	font-weight: 700;
	font-size: 16px;
	line-height: 20.03px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MatchContainer = styled.div`
	position: relative;
	top: 13px;
`;

const BarContainer = styled.div`
	position: relative;
	top: 26px;
	height: 12px;
	width: 350px;

	display: flex;
`;

const KoreaBar = styled.div<{ratio: number}>`
	width: ${({ratio}) => ratio * 100}%;
	height: 100%;
	background: linear-gradient(270deg, #f3233c 0%, rgba(243, 35, 60, 0.25) 100%);
	border-radius: 34px 0px 0px 34px;
`;

const YonseiBar = styled.div<{ratio: number}>`
	width: ${({ratio}) => ratio * 100}%;
	height: 100%;
	background: linear-gradient(270deg, rgba(41, 72, 255, 0.25) 0%, #2948ff 100%);
	border-radius: 0px 34px 34px 0px;
`;

const InfoContainer = styled.div`
	position: relative;

	top: 34px;
	width: 350px;
	height: 40px;

	display: flex;
	justify-content: space-between;
`;

const WinContainer = styled.div`
	font-weight: 700;
	font-size: 18px;
	line-height: 23px;
`;
const UnivContainer = styled.div`
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
`;
