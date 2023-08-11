import styled from "styled-components";
import type { valueType } from "../../app/signup/page";
import client from "@/lib/httpClient";

interface FooterBtnProps {
	value: valueType;
	progress: number;
	handleProgress: (num: number) => void;
	clickable: boolean;
	setClickable: (bool: boolean) => void;
	setSlide: (str: string) => void;
	error: string;
	setError: (str: "nickname" | "phoneNumber" | "authNumber" | "") => void;
	setPhoneErrorText: (str: string) => void;
	setCodeErrorText: (str: string) => void;
}

export default function FooterBtn({
	value,
	progress,
	handleProgress,
	clickable,
	setClickable,
	setSlide,
	error,
	setError,
	setPhoneErrorText,
	setCodeErrorText,
}: FooterBtnProps) {
	async function handleNextClick() {
		if (progress === 0 && value.school !== "") {
			setSlide(`slide${progress}`);
			setClickable(false);

			setTimeout(() => {
				handleProgress(progress + 1);
			}, 100);
		} else if (progress === 1 && value.nickname !== "") {
			try {
				const res = await client.get(`/auth/checkname?name=${value.nickname}`);

				if (res.data === true) {
					setSlide(`slide${progress}`);
					setClickable(false);
					setTimeout(() => {
						handleProgress(progress + 1);
					}, 100);
					setError("");
				} else {
					setError("nickname");
				}
			} catch (err) {
				console.log(err);
			}
		} else if (progress === 2 && value.phoneNumber.length >= 10) {
			try {
				const res = await client.post("/auth/phone", {
					phoneNumber: value.phoneNumber,
				});
				if (res.status === 400) {
					console.log(res);
					setError("phoneNumber");
					setPhoneErrorText(res.data.message);
				} else {
					setSlide(`slide${progress}`);
					setClickable(false);
					setTimeout(() => {
						handleProgress(progress + 1);
					}, 100);
				}
			} catch (err: any) {
				console.log(err);
				if (err.status === 400) {
					setError("phoneNumber");
					setPhoneErrorText(err.data.message);
				}
			}
		} else if (progress === 3 && value.authNumber.length === 6) {
			try {
				const enumCheckedValue = {
					university: value.school === "고려대학교" ? 0 : 1,
					name: value.nickname,
					phoneNumber: value.phoneNumber.replace(/-/g, ""),
					code: value.authNumber,
				};
				const res = await client.post("/auth/signup", enumCheckedValue);
				if (res.status === 400) {
					console.log(res);
					setError("authNumber");
					setCodeErrorText(res.data.message);
				} else {
					setSlide(`slide${progress}`);
					setClickable(true);
					setTimeout(() => {
						handleProgress(progress + 1);
					}, 100);
				}

				//여기에 요청 보내서 페이로드의 id 해석하고 id로 닉네임, 학교 받아오기
			} catch (err: any) {
				if (err.status === 400) {
					setError("authNumber");
					setCodeErrorText(err.data.message);
				}
			}
		} else if (progress === 4) {
			window.location.href = "/bets";
		}
	}

	return (
		<Button onClick={handleNextClick} clickable={clickable ? "true" : "false"}>
			{progress === 4 ? "TOKY 시작하기" : "다음"}
		</Button>
	);
}

const Button = styled.button<{ clickable: string }>`
	position: fixed;
	bottom: 0px;
	border: none;

	color: ${(props) =>
		props.clickable === "true" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.15)"};
	font-size: 22px;
	font-weight: 700;
	line-height: 28px;

	cursor: ${(props) => (props.clickable === "true" ? "pointer" : "auto")};

	background-color: #1f1f1f;
	width: 100%;
	height: 80px;
`;
