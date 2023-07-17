'use client';
import styled from 'styled-components';
import ResponsiveBox from '@/components/common/ResponsiveBox';
import TopBar from '@/components/common/TopBar';
import UserPoint from '@/components/draw/UserPoint';
import DrawGift from '@/components/draw/DrawGift';

export default function Draw() {
	return (
		<Wrapper>
			<TopBar title='내 포인트' />
			<UserPoint />
			<DrawGift />
		</Wrapper>
	);
}

const Wrapper = styled(ResponsiveBox)`
	position: absolute;
	background-color: #222222;
	right: 0;
	transition: 1s ease;
	padding: 0px;
`;
