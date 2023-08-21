"use client";

import styled from "styled-components";
import Image from "next/image";
import toky_bg from "../../../public/image/toky_login_img.png";
import Logo from "../../../public/image/logo.svg";
import { easeIn, motion } from "framer-motion";
import kakaoSymbol from "../../../public/image/kakaoSymbol.png";

export default function LoginComponent() {
	const kakaoLogin = async () => {
		window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/kakao";
	};

	return (
		<LoginContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: easeIn }}
		>
			<Image className="toky_logo" src={Logo} width={239} height={78} alt="logo" />
			<Image width={390} height={468} className="toky_bg" priority={true} src={toky_bg} alt="bg" />
			<LoginBtnContainer>
				<LoginBtn className="kakao" onClick={kakaoLogin}>
					<Image src={kakaoSymbol} width={30} height={30} />
					카카오톡으로 시작하기
				</LoginBtn>
			</LoginBtnContainer>
		</LoginContainer>
	);
}

const LoginContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-end;
	height: 100vh;
	position: relative;
	& .toky_logo {
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translate(-50%, -30%);
		z-index: 3;
	}
	& .toky_bg {
		vertical-align: bottom;
	}
	padding-bottom: 7vh;
`;

const LoginBtnContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const LoginBtn = styled.button`
	width: 90%;
	height: 46px;
	text-align: center;
	margin-bottom: 8px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 12px;
	color: rgba(0, 0, 0, 0.85);
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: -0.06em;
	border: none;
	/* transform: translateY(-25px); */
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&.kakao {
		background: #fee500;
	}
`;
