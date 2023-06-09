'use client';

import {useState} from 'react';
import styled from 'styled-components';

type selection = 'none' | 'korea' | 'yonsei';

export default function AnalyzeCheer() {
	const KoreaCheers = 1500,
		YonseiCheers = 100;
	const [selected, setSelected] = useState<selection>('none');
	const kRatio = ((KoreaCheers / (KoreaCheers + YonseiCheers)) * 100).toString().substring(0, 2);
	const yRatio = 100 - parseInt(kRatio);

	const cheerButtonHandler = (selection: selection) => {
		setSelected(selection);
	};

	return (
		<Wrapper>
			<TitleContainer>자신의 학교를 응원해주세요!</TitleContainer>
			<ButtonContainer>
				{selected === 'none' ? (
					<>
						<CheerButton
							onClick={() => cheerButtonHandler('korea')}
							style={{borderRadius: '7px 0px 0px 7px'}}
						>
							고려대학교
						</CheerButton>
						<CheerButton
							onClick={() => cheerButtonHandler('yonsei')}
							style={{borderRadius: '0px 7px 7px 0px'}}
						>
							연세대학교
						</CheerButton>
					</>
				) : (
					<>
						<SelectedButton
							onClick={() => cheerButtonHandler('korea')}
							style={{borderRadius: '7px 0px 0px 7px'}}
							selected={selected === 'korea' && selected}
						>
							고려대학교
							<div style={{display: 'flex'}}>
								<Ratio>{kRatio}</Ratio>
								<div style={{marginLeft: '4px', marginTop: '18px'}}>%</div>
							</div>
						</SelectedButton>
						<SelectedButton
							onClick={() => cheerButtonHandler('yonsei')}
							style={{borderRadius: '0px 7px 7px 0px'}}
							selected={selected === 'yonsei' && selected}
						>
							연세대학교
							<div style={{display: 'flex', justifyContent: 'space-between'}}>
								<Ratio>{yRatio}</Ratio>
								<div style={{marginLeft: '4px', marginTop: '18px'}}>%</div>
							</div>
						</SelectedButton>
					</>
				)}
			</ButtonContainer>
			<InfoContainer>
				현재 <strong>{KoreaCheers}명</strong>이 고려대학교, <strong>{YonseiCheers}명</strong>이
				연세대학교를 응원하고 있어요!
			</InfoContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 290px;
	background-color: #1f1f1f;
	position: relative;
	top: 387px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleContainer = styled.div`
	position: relative;
	top: 63px;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;

	text-align: center;
	letter-spacing: -0.04em;

	color: rgba(255, 255, 255, 0.87);
`;

const ButtonContainer = styled.div`
	position: relative;
	top: 63px;
	width: 350px;
	height: 67px;

	display: flex;
	justify-content: space-between;

	font-weight: 700;
	font-size: 16px;
	line-height: 20px;

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: -0.03em;

	color: #ffffff;
`;

const CheerButton = styled.button`
	width: 174px;
	height: 67px;
	position: relative;
	background: #323232;
	top: 21px;
`;

const InfoContainer = styled.div`
	width: 280px;
	height: 32px;

	position: relative;
	top: 103px;

	font-weight: 300;
	font-size: 13px;
	line-height: 16px;
	text-align: center;

	color: #ffffff;
`;

const SelectedButton = styled.button<{selected: false | 'korea' | 'yonsei'}>`
	width: 174px;
	height: 67px;
	position: relative;
	top: 21px;

	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	letter-spacing: -0.06em;

	box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
	color: #ffffff;
	${({selected}) =>
		!selected
			? 'background-color: #181818; color: rgba(255, 255, 255, 0.15);'
			: selected === 'korea'
			? 'background: linear-gradient(90deg, #F3233C 0%, rgba(243, 35, 60, 0.25) 100%);'
			: 'background: linear-gradient(90deg,  rgba(41, 72, 255, 0.25) 0%, #2948FF 100%);'}
`;

const Ratio = styled.div`
	font-weight: 700;
	font-size: 30px;
	line-height: 38px;

	text-align: center;
	letter-spacing: -0.1em;
`;
