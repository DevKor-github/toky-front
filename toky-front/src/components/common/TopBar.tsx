import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import ResponsiveBox from '@/components/common/ResponsiveBox';
import SideBar from '@/components/common/SideBar';
import SideBarBody from './SideBarBody';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const Wrapper = styled(ResponsiveBox)`
	position: absolute;
	background-color: #121212;
	right: 0;
	transition: 1s ease;
	&.open {
		transition: 1s ease;
		right: 331px;
	}
`;

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NavItem = styled.div`
	color: white;
`;

export default function TopBar() {
	const [isBarOpen, setIsBarOpen] = useState(false);
	const inside = useRef<any>();
	useEffect(() => {
		const handlerOutside = (e: any) => {
			if (!inside.current.contains(e.target)) {
				setIsBarOpen(false);
			}
		};
		document.addEventListener('mousedown', handlerOutside);
		return () => {
			document.removeEventListener('mousedown', handlerOutside);
		};
	});
	const handleMenuClick = () => {
		setIsBarOpen(true);
	};
	return (
		<Container>
			<Wrapper className={isBarOpen ? 'open' : ''}>
				<NavBar>
					<NavItem>Home</NavItem>
					<NavItem>Home</NavItem>
					<NavItem>Home</NavItem>
					<SideBar handleMenuClick={handleMenuClick} />
				</NavBar>
			</Wrapper>
			<SideBarBody ref={inside} isBarOpen={isBarOpen} />
		</Container>
	);
}
