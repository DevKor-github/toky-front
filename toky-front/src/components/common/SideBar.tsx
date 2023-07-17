import React, {useEffect, useState, useRef, RefObject} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Hamburger from '../../../public/image/Hamburger.png';
import SideBarBody from './SideBarBody';

const Wrapper = styled.div``;

const MenuButton = styled.button`
	padding: 5px 3px 0px 3px;
	background-color: #121212;
	border-radius: 2px;
	&:hover {
		background-color: #555555;
	}
	&:active {
		background-color: #888888;
	}
`;

export default function SideBar({style}: {style?: any}) {
	const [isBarOpen, setIsBarOpen] = useState(false);
	const inside = useRef<HTMLDivElement | null>();
	useEffect(() => {
		const handlerOutside = (e: any) => {
			if (inside.current && !inside.current.contains(e.target)) {
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
		<Wrapper>
			<MenuButton onClick={handleMenuClick} style={style}>
				<Image src={Hamburger} alt='menu' style={{margin: '0px  2px'}} />
			</MenuButton>
			<SideBarBody isBarOpen={isBarOpen} ref={inside as RefObject<HTMLDivElement>} />
		</Wrapper>
	);
}
